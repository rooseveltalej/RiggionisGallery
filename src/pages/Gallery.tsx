"use client";

import { useState, useEffect } from "react";
import {
  ProjectGrid 
} from "../components";
import remoteConfigData from "../remote_config.json";
import "./Gallery.css";


// TODO: THIS CODE IS JUST FOR NOW, TO SIMULATE HOW GONNA LOOKS THE PAGE IN THE FUTURE

type LanguageKey = "spanish" | "english";

// TODO: The interfaces should be in a separate file
interface RemoteConfigState {
  general_titles: any;
  gallery_titles: any;
}

const Gallery = () => {
  const [currentLanguage] = useState<LanguageKey>("spanish");
  const [remoteConfig, setRemoteConfig] = useState<RemoteConfigState | null>(null);

  useEffect(() => {
    // simulate fetching remote config based on language
    const config = remoteConfigData.languages[currentLanguage];
    setRemoteConfig({
      general_titles: config["general-titles"],
      gallery_titles: config["gallery-page"]
    });
  }, [currentLanguage]);

  // if remoteConfig is not loaded, the page shows a loading message
  if (!remoteConfig) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Cargando galería...</div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <ProjectGrid
        general_titles={remoteConfig.general_titles}
        gallery_titles={remoteConfig.gallery_titles}
      />
    </div>
  );
};

export default Gallery;