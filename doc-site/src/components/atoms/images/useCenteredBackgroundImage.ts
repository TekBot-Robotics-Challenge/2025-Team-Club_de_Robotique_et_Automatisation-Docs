
import { useEffect } from "react";

// interface ScreenSizeProps {
//   mobile_s: string | number;
//   mobile_m: string | number;
//   mobile_l: string | number;
//   tablet: string | number;
//   laptop: string | number;
//   laptop_l: string | number;
//   desktop: string | number;
//   k_screen: string | number;
// }

// interface BackgroundOptions {
//   screen_size?: ScreenSizeProps;
//   style?: React.CSSProperties;
//   zoom?: number; // Ex: 1.2 = 120% zoom
// }


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

interface ZoomByScreenSize {
  mobile_s?: number;
  mobile_m?: number;
  mobile_l?: number;
  tablet?: number;
  laptop?: number;
  laptop_l?: number;
  desktop?: number;
  k_screen?: number;
}

interface BackgroundOptions {
  screen_size?: ScreenSizeProps;
  zoom_by_screen_size?: ZoomByScreenSize;
  style?: React.CSSProperties;
}



const formatWidth = (value: string | number): string =>
  typeof value === "number" ? `${value}px` : value;

const getResponsiveWidth = (screenSize?: ScreenSizeProps): string => {
  const w = window.innerWidth;

  if (w < 320) return formatWidth(screenSize?.mobile_s ?? "100%");
  if (w <= 375) return formatWidth(screenSize?.mobile_m ?? "100%");
  if (w <= 425) return formatWidth(screenSize?.mobile_l ?? "100%");
  if (w <= 768) return formatWidth(screenSize?.tablet ?? "100%");
  if (w <= 1024) return formatWidth(screenSize?.laptop ?? "100%");
  if (w <= 1440) return formatWidth(screenSize?.laptop_l ?? "100%");
  if (w <= 1920) return formatWidth(screenSize?.desktop ?? "100%");
  if (w <= 2560) return formatWidth(screenSize?.k_screen ?? "100%");
  return "100%";
};


const getResponsiveZoom = (zoomMap?: ZoomByScreenSize): number => {
  const w = window.innerWidth;

  if (w < 320) return zoomMap?.mobile_s ?? 1;
  if (w <= 375) return zoomMap?.mobile_m ?? 1;
  if (w <= 425) return zoomMap?.mobile_l ?? 1;
  if (w <= 768) return zoomMap?.tablet ?? 1;
  if (w <= 1024) return zoomMap?.laptop ?? 1;
  if (w <= 1440) return zoomMap?.laptop_l ?? 1;
  if (w <= 1920) return zoomMap?.desktop ?? 1;
  if (w <= 2560) return zoomMap?.k_screen ?? 1;
  return 1;
};


// export const useCenteredBackgroundImage = <T extends HTMLElement>(
//   ref: React.RefObject<T | null>,
//   src: string,
//   options?: BackgroundOptions
// ) => {
//   useEffect(() => {
//     const applyBackground = () => {
//       const element = ref.current;
//       if (!element) return;


//       const backgroundSize = getResponsiveWidth(options?.screen_size);

//       Object.assign(element.style, {
//         backgroundImage: `url(${src})`,
//         backgroundSize, // ← adaptative cover/contain/px/% depending on device
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "top center",
//         ...options?.style,
//       });

//     };

//     applyBackground();
//     window.addEventListener("resize", applyBackground);
//     return () => window.removeEventListener("resize", applyBackground);
//   }, [ref, src, options]);
// };












// export const useCenteredBackgroundImage = <T extends HTMLElement>(
//   ref: React.RefObject<T | null>,
//   src: string,
//   options?: BackgroundOptions
// ) => {
//   useEffect(() => {
//     const applyBackground = () => {
//       const element = ref.current;
//       if (!element) return;

//       const baseWidth = getResponsiveWidth(options?.screen_size);
//       const zoom = options?.zoom ?? 1;

//       let backgroundSize = baseWidth;

//       if (typeof baseWidth === "string" && baseWidth.endsWith("%")) {
//         const percent = parseFloat(baseWidth);
//         backgroundSize = `${percent * zoom}%`;
//       } else if (typeof baseWidth === "string" && baseWidth.endsWith("px")) {
//         const px = parseFloat(baseWidth);
//         backgroundSize = `${px * zoom}px`;
//       }

//       Object.assign(element.style, {
//         backgroundImage: `url(${src})`,
//         backgroundSize,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center center", // zoom centré
//         ...options?.style,
//       });
//     };

//     applyBackground();
//     window.addEventListener("resize", applyBackground);
//     return () => window.removeEventListener("resize", applyBackground);
//   }, [ref, src, options]);
// };






export const useCenteredBackgroundImage = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  src: string,
  options?: BackgroundOptions
) => {
  useEffect(() => {
    const applyBackground = () => {
      const element = ref.current;
      if (!element) return;

      const baseWidth = getResponsiveWidth(options?.screen_size);
      const zoom = getResponsiveZoom(options?.zoom_by_screen_size);

      let backgroundSize = baseWidth;

      if (typeof baseWidth === "string" && baseWidth.endsWith("%")) {
        const percent = parseFloat(baseWidth);
        backgroundSize = `${percent * zoom}%`;
      } else if (typeof baseWidth === "string" && baseWidth.endsWith("px")) {
        const px = parseFloat(baseWidth);
        backgroundSize = `${px * zoom}px`;
      }

      Object.assign(element.style, {
        backgroundImage: `url(${src})`,
        backgroundSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        ...options?.style,
      });
    };

    applyBackground();
    window.addEventListener("resize", applyBackground);
    return () => window.removeEventListener("resize", applyBackground);
  }, [ref, src, options]);
};
