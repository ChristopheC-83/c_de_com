"use client";

import { useEffect,  } from "react";
import useThemeStore from "@/store/ThemeStore";

export default function ThemesProvider({ children }) {
  // A décommenter au moment du déploiement

//   useEffect(() => {
//     const themes = ["sunshine", "happy", "deep", "dark", "gray", "salad"];

//     function applyRandomTheme() {
//       const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//       document.documentElement.setAttribute("data-theme", randomTheme);
//     }

//     applyRandomTheme();
//   }, []);

const { theme, setTheme } = useThemeStore();

useEffect(() => {
  if (!theme) {
    const themes = ["sunshine", "happy", "deep", "dark", "gray", "salad"];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(randomTheme);
    document.documentElement.setAttribute("data-theme", randomTheme);
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}, [theme, setTheme]);


  return <>{children}</>;
}
