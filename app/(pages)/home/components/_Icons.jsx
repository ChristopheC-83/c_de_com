import useThemeStore from "@/store/ThemeStore";

export default function Icons({ children, size = "text-xl" }) {
  // On récupére le theme pour changer couleur des icones si besoin
  const { theme } = useThemeStore();
  const themesWithWhiteText = ["dark", "gray", "deep"];



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
