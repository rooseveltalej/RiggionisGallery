import type { LanguageData } from "@/contexts";
import { remoteConfig } from "./config";
import { fetchAndActivate, getValue } from "firebase/remote-config";

export const fetchRemoteConfig = async (): Promise<LanguageData | null> => {
  try {
    await fetchAndActivate(remoteConfig);
    const languagesString = getValue(remoteConfig, "languages").asString();
    if (!languagesString) {
      console.warn("[RemoteConfig] No languages data found");
      return null;
    }

    const parsed = JSON.parse(languagesString);

    if (parsed?.languages && typeof parsed.languages === "object") {
      return parsed.languages as LanguageData;
    }

    console.warn("[RemoteConfig] Invalid languages structure");
    return null;
  } catch (e) {
    console.error("[RemoteConfig] Error parsing languages:", e);
    return null;
  }
};
