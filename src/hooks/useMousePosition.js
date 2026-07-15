/**
 * useMousePosition Hook
 * @description Tracks mouse position for interactive cursor effects.
 * Useful for parallax effects, custom cursor animations, and hover regions.
 * @returns {Object} { x, y }
 */

import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
