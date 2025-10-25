import { useMemo } from "react";
import { useLanguage } from "@/hooks";
import type { ArtistProfile } from "@/types/ArtistProfile.interface";
import type { ArtistPageStrings } from "@/types/ArtistStrings.interface";

interface ArtistLabels {
  name: string;
  degree: string;
  phone: string;
  email1: string;
  email2: string;
}

interface ArtistValues {
  name: string;
  degree: string;
  phone: string;
  email1: string;
  email2: string;
}

interface WhatsAppMessages {
  contact_general: string;
  quote_request: string;
  artist_info: string;
}

export interface UseArtistRemoteConfigResult {
  loading: boolean;
  profile: ArtistProfile | null;
  labels: ArtistLabels;
  values: ArtistValues;
  whatsappMessages: WhatsAppMessages;
  pageStrings: ArtistPageStrings;
  error?: string;
}

export function useArtistRemoteConfig(): UseArtistRemoteConfigResult {
  const { languageStrings, loading } = useLanguage();

  return useMemo<UseArtistRemoteConfigResult>(() => {
    const profile = (languageStrings?.artist_content ?? null) as ArtistProfile | null;

    const generalTitles = languageStrings?.general_titles;

    const labels: ArtistLabels =
      generalTitles?.artist_info?.labels ?? {
        name: "Nombre",
        degree: "Grado académico",
        phone: "Teléfono",
        email1: "Correo",
        email2: "Correo 2",
      };

    const values: ArtistValues =
      generalTitles?.artist_info?.values ?? {
        name: profile?.personName ?? "",
        degree: "",
        phone: "",
        email1: "",
        email2: "",
      };

    const whatsappMessages: WhatsAppMessages =
      generalTitles?.whatsapp_messages ?? {
        contact_general: "Mensaje de Contacto General.",
        quote_request: "Solicitud de cotización.",
        artist_info: "Mensaje sobre información del artista.",
      };

    const pageStrings: ArtistPageStrings =
      (languageStrings?.artist_page as ArtistPageStrings | undefined) ?? {
        sections: {
          academic: "Preparación académica",
          experience: "Experiencia",
          skills: "Habilidades y Herramientas",
          languages: "Idiomas",
        },
        buttons: {
          view_cv: "Ver CV",
          download_cv: "Descargar CV",
          contact: "Enviar mensaje",
        },
      };

    const error = !profile
      ? "No hay contenido de artista en el remote config (artist_content)."
      : undefined;

    return {
      loading,
      profile,
      labels,
      values,
      whatsappMessages,
      pageStrings,
      error,
    };
  }, [languageStrings, loading]);
}
