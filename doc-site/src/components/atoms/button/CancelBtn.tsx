import React, { useEffect, useRef, useState } from "react";
import H4Title from "../text/H4Title";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CancelBtn: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const [height, setHeight] = useState(50);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;

      const WidthMobileM = 120;
      const ScreenWidthMobileM = 320;
      const WidthKscreen = 233;
      const ScreenWidthKscreen = 2560;

      const a = (WidthKscreen - WidthMobileM) / (ScreenWidthKscreen - ScreenWidthMobileM);
      const b = WidthMobileM - a * ScreenWidthMobileM;

      const widthRef = a * screenWidth + b;
      const height = 0.33 * widthRef;
      setHeight(height);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const radiusRatio = 20 / 66; // ≈ 0.303
  const borderRadius = height * radiusRatio;

  const normalShadow = `
    inset 0px -2px 6px rgba(0, 0, 0, 0.1),
    inset -2px 0px 4px rgba(255, 255, 255, 0.3),
    inset 2px 0px 4px rgba(0, 0, 0, 0.3),
    inset 0px -6px 4px rgba(0, 0, 0, 0.1),
    inset 0px 6px 4px rgba(255, 255, 255, 0.3)
  `;

  const pressedShadow = `
    inset 0px -1px 3px rgba(0, 0, 0, 0.1),
    inset -1px 0px 2px rgba(255, 255, 255, 0.3),
    inset 1px 0px 2px rgba(0, 0, 0, 0.3),
    inset 0px -3px 2px rgba(0, 0, 0, 0.1),
    inset 0px 3px 2px rgba(255, 255, 255, 0.3)
  `;

  return (
    // <button
    //   style={{
    //     height: `${height}px`,
    //     borderRadius: `${borderRadius}px`,
    //     boxShadow: pressed ? pressedShadow : normalShadow,
    //     transform: pressed ? "scale(0.90)" : "scale(1)",
    //     transition: "box-shadow 0.2s ease, transform 0.2s ease, border-radius 0.2s ease",
    //   }}
    //   className={`bg-dark px-5 ${className ?? ""}`}
    //   onMouseDown={() => setPressed(true)}
    //   onMouseUp={() => setPressed(false)}
    //   onMouseLeave={() => setPressed(false)}
    //   onTouchStart={() => setPressed(true)}
    //   onTouchEnd={() => setPressed(false)}
    //   {...props}
    // >
    <button
  style={{
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
    boxShadow: pressed ? pressedShadow : normalShadow,
    transform: pressed ? "scale(0.90)" : "scale(1)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease, border-radius 0.2s ease",
    display: "inline-block",
    willChange: "transform, box-shadow",
    touchAction: "manipulation",
    cursor: "pointer",
  }}
  className={`bg-dark px-5 ${className ?? ""}`}
  onMouseDown={() => setPressed(true)}
  onMouseUp={() => setPressed(false)}
  onMouseLeave={() => setPressed(false)}
  onTouchStart={() => setPressed(true)}
  onTouchEnd={() => setTimeout(() => setPressed(false), 100)}
  {...props}
>

      <span className="select-none">
        <H4Title className="text-center text-white font-bold">{children}</H4Title>
      </span>
    </button>
  );
};

export default CancelBtn;
