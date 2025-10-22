import { useEffect, useMemo, useRef, useState } from "react";

export type AcademicItem = { title: string; institution: string; year: string };
export type ExperienceItem = { heading: string; years: string; description: string };

export type ArtistProfileRaw = Partial<{
  personName: unknown;
  fullName: unknown;
  title: unknown;
  degree: unknown;
  avatarUrl: unknown;
  academic: unknown;
  experience: unknown;
  skills: unknown;      
  languages: unknown;  
  cv: unknown;          
  contact: unknown;      
}>;

export type ArtistProfile = {
  personName: string;
  fullName: string;
  title: string;
  degree: string;
  avatarUrl?: string | null;
  academic: AcademicItem[];
  experience: ExperienceItem[];
  skills: string[][];
  languages: string[];
  cv: { viewUrl?: string; downloadUrl?: string; filename?: string };
  contact: { href?: string; cta?: string };
};

const isStr = (v: unknown): v is string => typeof v === "string";
const asStr = (v: unknown, fb = "") => (isStr(v) ? v.trim() : fb);

const isArray = Array.isArray;
const isArrayOfStr = (v: unknown): v is string[] => isArray(v) && v.every(isStr);

function normalizeSkills(v: unknown, rowSize = 4): string[][] {
  if (isArray(v) && v.every(isArrayOfStr)) return v as string[][];
  if (isArrayOfStr(v)) {
    const rows: string[][] = [];
    for (let i = 0; i < v.length; i += rowSize) rows.push(v.slice(i, i + rowSize));
    return rows;
  }
  return [];
}

function normalizeAcademic(v: unknown): AcademicItem[] {
  if (!isArray(v)) return [];
  return v
    .map((it) => ({
      title: asStr((it as any)?.title, "Título"),
      institution: asStr((it as any)?.institution, "Institución"),
      year: asStr((it as any)?.year, "Año"),
    }))
    .filter((it) => it.title || it.institution || it.year);
}

function normalizeExperience(v: unknown): ExperienceItem[] {
  if (!isArray(v)) return [];
  return v
    .map((it) => ({
      heading: asStr((it as any)?.heading, "Experiencia en …"),
      years: asStr((it as any)?.years, "Año - Año"),
      description: asStr((it as any)?.description, "Descripción de la experiencia…"),
    }))
    .filter((it) => it.heading || it.description);
}

function normalizeUrls(obj: unknown): { viewUrl?: string; downloadUrl?: string; filename?: string } {
  const o = (obj ?? {}) as any;
  const viewUrl = isStr(o.viewUrl) ? o.viewUrl : undefined;
  const downloadUrl = isStr(o.downloadUrl) ? o.downloadUrl : undefined;
  const filename = isStr(o.filename) ? o.filename : undefined;
  return { viewUrl, downloadUrl, filename };
}

function normalizeContact(obj: unknown): { href?: string; cta?: string } {
    const o = (obj ?? {}) as any;
    const raw = typeof o.href === "string" ? o.href.trim() : undefined;
    const href = raw && raw.length > 0 ? raw : undefined;
    const cta = asStr(o.cta, "Enviar mensaje");
    return { href, cta };
  }
  

function buildProfile(raw: ArtistProfileRaw, defaults?: Partial<ArtistProfile>): ArtistProfile {
  const base: ArtistProfile = {
    personName: asStr(raw.personName, defaults?.personName ?? "Nombre del Artista"),
    fullName: asStr(raw.fullName, defaults?.fullName ?? "Nombre Completo del Artista"),
    title: asStr(raw.title, defaults?.title ?? "Especialidad"),
    degree: asStr(raw.degree, defaults?.degree ?? "Grado académico"),
    avatarUrl: isStr(raw.avatarUrl) ? raw.avatarUrl : null,
    academic: normalizeAcademic(raw.academic),
    experience: normalizeExperience(raw.experience),
    skills: normalizeSkills(raw.skills),
    languages: isArrayOfStr(raw.languages) ? raw.languages : [],
    cv: normalizeUrls(raw.cv),
    contact: normalizeContact(raw.contact),
  };
  return base;
}

function collectWarnings(p: ArtistProfile): string[] {
  const msgs: string[] = [];
  if (!p.personName) msgs.push("personName está vacío; usando placeholder.");
  if (!p.fullName) msgs.push("fullName está vacío; usando placeholder.");
  if (!p.title) msgs.push("title está vacío; usando placeholder.");
  if (p.skills.length === 0) msgs.push("skills no tiene elementos válidos.");
  if (p.languages.length === 0) msgs.push("languages no tiene elementos válidos.");
  
const looksUrl = (u?: string) => {
    if (!u || typeof u !== "string") return false;
    const s = u.trim();
  
    if (/^https?:\/\/\S+/i.test(s)) return true;
  
    if (/^(mailto:|tel:|sms:|whatsapp:|wa\.me\/|skype:|tg:|viber:)/i.test(s)) return true;
  
    if (/^(\/|\.{1,2}\/)\S+/.test(s)) return true;
  
    return false;
  };

  if (p.cv.viewUrl && !looksUrl(p.cv.viewUrl)) msgs.push("cv.viewUrl no parece una URL válida.");
  if (p.cv.downloadUrl && !looksUrl(p.cv.downloadUrl)) msgs.push("cv.downloadUrl no parece una URL válida.");
  if (p.contact.href && !looksUrl(p.contact.href)) msgs.push("contact.href no parece una URL válida.");
  return msgs;
}

type UseArtistProfileOptions =
  | { source: ArtistProfileRaw | null | undefined; defaults?: Partial<ArtistProfile> }
  | { url: string; defaults?: Partial<ArtistProfile> };

export function useArtistProfile(opts: UseArtistProfileOptions) {
  const [profile, setProfile] = useState<ArtistProfile | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const urlRef = useRef<string | undefined>("url" in opts ? opts.url : undefined);
  const defaults = "defaults" in opts ? opts.defaults : undefined;

  const normalizeAndSet = (raw: ArtistProfileRaw) => {
    const p = buildProfile(raw, defaults);
    const warns = collectWarnings(p);
    setProfile(p);
    setErrors(warns);
  };

  const load = async () => {
    setLoading(true);
    try {
      if ("url" in opts) {
        const res = await fetch(opts.url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as ArtistProfileRaw;
        normalizeAndSet(json);
      } else {
        normalizeAndSet((opts.source ?? {}) as ArtistProfileRaw);
      }
    } catch (e: any) {
      setErrors([`Error cargando datos: ${e?.message ?? String(e)}`]);
      setProfile(buildProfile({}, defaults));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [urlRef.current]);

  const value = useMemo(
    () => ({
      profile,
      loading,
      errors,
      reload: load,
      hasErrors: errors.length > 0,
    }),
    [profile, loading, errors]
  );

  return value;
}
