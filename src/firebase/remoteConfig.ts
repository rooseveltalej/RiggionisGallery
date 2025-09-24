import { remoteConfig } from "./config";
import {
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";

export const fetchRemoteConfig = async (): Promise<unknown | null> => {
  try {
    await fetchAndActivate(remoteConfig);
    const languagesString = getValue(remoteConfig, "languages").asString();
    const parsed = JSON.parse(languagesString);
    if (
      parsed &&
      typeof parsed === 'object' &&
      Object.keys(parsed).length === 1 &&
      parsed.languages
    ) {
      return parsed.languages;
    }
    if (parsed && typeof parsed === 'object' && parsed.spanish && parsed.english) {
      return parsed;
    }
    return null;
  } catch (e) {
    if (typeof window !== 'undefined') {
      console.error('[RemoteConfig] Error parsing languages:', e);
    }
    return null;
  }
};