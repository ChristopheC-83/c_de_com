import { useEffect, useState } from "react";

export default function Icons({ children, size = "text-xl" }) {
  // On récupére le theme pour changer couleur des icones si besoin
  const [theme, setTheme] = useState("");
  const themesWithWhiteText = ["dark", "gray", "deep"];

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme || "default");
  }, [theme]);

  return (
    <div
      className={`p-3 ${size} rounded-full filterShadow bg-clip flip_hover ${
        themesWithWhiteText.includes(theme) ? "text-white" : ""
      }`}
    >
      {children}
    </div>
  );
}
