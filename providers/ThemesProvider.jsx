"use client";

import { useEffect,  } from "react";

export default function ThemesProvider({ children }) {
  // A décommenter au moment du déploiement

  useEffect(() => {
    const themes = ["sunshine", "happy", "deep", "dark", "gray", "salad"];

    function applyRandomTheme() {
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      document.documentElement.setAttribute("data-theme", randomTheme);
    }

    applyRandomTheme();
  }, []);


  return <>{children}</>;
}
