import fs from "fs";

const config = JSON.parse(fs.readFileSync("remoteConfig.json", "utf8"));

// Traducciones de metadata
const translations = {
  Óleo: "Oil",
  Acrílico: "Acrylic",
  Acuarela: "Watercolor",
  Mixta: "Mixed",
  Lienzo: "Canvas",
  Papel: "Paper",
  Madera: "Wood",
  Metal: "Metal",
  Realismo: "Realism",
  Abstracto: "Abstract",
  Impresionismo: "Impressionism",
  Surrealismo: "Surrealism",
  "Pop Art": "Pop Art",
  Disponible: "Available",
  Vendido: "Sold",
  Agotado: "Out of stock",
};

// Actualizar proyectos en inglés
if (config.languages.english.gallery_page.projects) {
  config.languages.english.gallery_page.projects.forEach((project) => {
    if (project.metadata) {
      if (project.metadata.technique) {
        project.metadata.technique =
          translations[project.metadata.technique] ||
          project.metadata.technique;
      }
      if (project.metadata.support) {
        project.metadata.support =
          translations[project.metadata.support] || project.metadata.support;
      }
      if (project.metadata.style) {
        project.metadata.style =
          translations[project.metadata.style] || project.metadata.style;
      }
    }
    if (project.availability) {
      project.availability =
        translations[project.availability] || project.availability;
    }
  });
}

fs.writeFileSync("remoteConfig.json", JSON.stringify(config, null, 2), "utf8");
console.log("Metadata actualizada correctamente");
