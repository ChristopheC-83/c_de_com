"use client"

import { useEffect } from "react";
import HomePage from "./(pages)/home/page";

export default function Home() {

  useEffect(() => {
    const themes = ['sunshine', 'happy', 'deep', 'dark', 'gray', 'salad'];

    function applyRandomTheme() {
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      document.documentElement.setAttribute('data-theme', randomTheme);
    }

    applyRandomTheme();
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}
