/**
 * useTheme Hook
 * @description Manages light/dark theme state and generates color palette based on theme.
 * Useful for consistent theming across components.
 * @returns {Object} { theme, colors, toggleTheme }
 */

import { useState } from "react";

export default function useTheme() {
  const [lightMode, setLightMode] = useState(false);

  const colors = {
    bg: lightMode ? "#f8fafc" : "#020617",
    textPrimary: lightMode ? "#0f172a" : "#e2e8f0",
    textSecondary: lightMode ? "#475569" : "#94a3b8",
    cardBg: lightMode ? "rgba(255,255,255,0.9)" : "rgba(15,23,42,0.8)",
    cardBorder: lightMode ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
    accentCyan: "#06b6d4",
    accentIndigo: "#818cf8",
    accentPink: "#ec4899",
  };

  const toggleTheme = () => setLightMode(!lightMode);

  return {
    lightMode,
    colors,
    toggleTheme,
  };
}
