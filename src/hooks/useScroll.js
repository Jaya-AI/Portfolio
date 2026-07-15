/**
 * useScroll Hook
 * @description Tracks scroll position and calculates scroll progress percentage.
 * Useful for animations, progress bars, and scroll-triggered effects.
 * @returns {Object} { scrollY, scrollProgress, showTopButton }
 */

import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setShowTopButton(currentScroll > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(
    100,
    (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  ) || 0;

  return { scrollY, scrollProgress, showTopButton };
}
