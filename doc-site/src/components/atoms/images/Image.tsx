import React, { useState, useEffect } from 'react';

export interface ScreenSizeProps {
  mobile_s: string | number;
  mobile_m: string | number;
  mobile_l: string | number;
  tablet: string | number;
  laptop: string | number;
  laptop_l: string | number;
  desktop: string | number;
  k_screen: string | number;
}

export interface ImageProps {
  src: string; // URL ou chemin de l'image
  alt: string; // Texte alternatif
  screen_size?: ScreenSizeProps;
  className?: string; // Classes CSS additionnelles
  containerStyle?: React.CSSProperties; // Styles en ligne pour le conteneur parent
}

const Image: React.FC<ImageProps> = (props) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [width, setWidth] = useState<string | number>(props.screen_size?.mobile_s || '100%');

  // Fonction utilitaire pour convertir un nombre en chaîne avec "px"
  const formatWidth = (value: string | number): string =>
    typeof value === "number" ? `${value}px` : value;

  // Chargement des dimensions de l'image pour calculer le ratio
  useEffect(() => {
    const img = new window.Image();
    img.src = props.src;
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      setAspectRatio(ratio); // Stocke le ratio calculé
    };
  }, [props.src]);

  // Mise à jour de la largeur en fonction de la taille de l'écran

  useEffect(() => {
    const updateWidth = () => {
      let newWidth: string = '100%'; // Valeur par défaut
  
      if (window.innerWidth < 320) {
        newWidth = formatWidth(props.screen_size?.mobile_s ?? '100%');
      } else if (window.innerWidth <= 375) {
        newWidth = formatWidth(props.screen_size?.mobile_m ?? '100%');
      } else if (window.innerWidth <= 425) {
        newWidth = formatWidth(props.screen_size?.mobile_l ?? '100%');
      } else if (window.innerWidth <= 768) {
        newWidth = formatWidth(props.screen_size?.tablet ?? '100%');
      } else if (window.innerWidth <= 1024) {
        newWidth = formatWidth(props.screen_size?.laptop ?? '100%');
      } else if (window.innerWidth <= 1440) {
        newWidth = formatWidth(props.screen_size?.laptop_l ?? '100%');
      } else if (window.innerWidth <= 1920) {
        newWidth = formatWidth(props.screen_size?.desktop ?? '100%');
      } else if (window.innerWidth <= 2560) {
        newWidth = formatWidth(props.screen_size?.k_screen ?? '100%');
      }
  
      setWidth(newWidth);
    };
  
    updateWidth(); // Initialiser la largeur
    window.addEventListener("resize", updateWidth); // Écouter les changements de taille d'écran
    return () => window.removeEventListener("resize", updateWidth); // Nettoyage
  }, [props.screen_size]);
  



 
  // Si le ratio n'est pas encore calculé, on n'affiche rien
  if (aspectRatio === null) {
    return <div style={{ width: formatWidth(width) }} />;
  }

  return (
    <div
      style={{
        width: formatWidth(width), // Largeur calculée dynamiquement
        height: `calc(${formatWidth(width)} / ${aspectRatio})`, // Hauteur calculée dynamiquement
        position: "relative",
        overflow: "hidden",
        ...props.containerStyle, // Appliquer les styles en ligne pour le conteneur parent
      }}
      className="overflow-visible"
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // Maintient les proportions de l'image
        }}
        className={`w-full h-auto ${props.className}`}

        onContextMenu={(e) => e.preventDefault()} // Désactiver le clic droit
        onDragStart={(e) => e.preventDefault()} // Désactiver le glisser-déposer
      />
    </div>
  );
};

export default Image;