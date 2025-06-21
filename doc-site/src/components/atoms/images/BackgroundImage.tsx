// ValidationBtn.tsx
import React, { useState, useEffect } from "react";


interface ScreenSizeProps {
  mobile_s: string | number;
  mobile_m: string | number;
  mobile_l: string | number;
  tablet: string | number;
  laptop: string | number;
  laptop_l: string | number;
  desktop: string | number;
  k_screen: string | number;
}

interface BackgroundImageProps {
  src: string; // URL ou chemin de l'image
  alt?: string; // Texte alternatif
  screen_size?: ScreenSizeProps;
  className?: string; // Classes CSS additionnelles
  containerStyle?: React.CSSProperties; // Styles en ligne pour le conteneur parent
  children?: React.ReactNode; // Contenu enfant
}
/**
 * Composant BackgroundImage
 * @param {string} src - URL de l'image de fond
 * @param {string} alt - Texte alternatif pour l'image
 * @param {ScreenSizeProps} screen_size - Propriétés de taille d'écran pour le responsive
 * @param {string} className - Classes CSS additionnelles
 * @param {React.CSSProperties} containerStyle - Styles en ligne pour le conteneur parent
 * @param {React.ReactNode} children - Contenu enfant à afficher par-dessus l'image de fond
 */
const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
  const [width, setWidth] = useState<string | number>(
    props.screen_size?.mobile_s || "100%"
  );

  const formatWidth = (value: string | number): string =>
    typeof value === "number" ? `${value}px` : value;

  useEffect(() => {
    const updateWidth = () => {
      let newWidth: string = "100%";

      if (window.innerWidth < 320) {
        newWidth = formatWidth(props.screen_size?.mobile_s ?? "100%");
      } else if (window.innerWidth <= 375) {
        newWidth = formatWidth(props.screen_size?.mobile_m ?? "100%");
      } else if (window.innerWidth <= 425) {
        newWidth = formatWidth(props.screen_size?.mobile_l ?? "100%");
      } else if (window.innerWidth <= 768) {
        newWidth = formatWidth(props.screen_size?.tablet ?? "100%");
      } else if (window.innerWidth <= 1024) {
        newWidth = formatWidth(props.screen_size?.laptop ?? "100%");
      } else if (window.innerWidth <= 1440) {
        newWidth = formatWidth(props.screen_size?.laptop_l ?? "100%");
      } else if (window.innerWidth <= 1920) {
        newWidth = formatWidth(props.screen_size?.desktop ?? "100%");
      } else if (window.innerWidth <= 2560) {
        newWidth = formatWidth(props.screen_size?.k_screen ?? "100%");
      }

      setWidth(newWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [props.screen_size]);

  return (
    <div className="relative w-full h-full">
      {/* Background centré, couvrant tout le parent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-center bg-cover -z-10"
        style={{
          width: formatWidth(width),
          height: "100%", // ou une autre valeur si besoin
          backgroundImage: `url(${props.src})`,
          ...props.containerStyle,
        }}
      />
      {props.children}
    </div>
  );
};



export default BackgroundImage;
