export const metadata = {
  title: "À Propos | Compagnon de Com'",
  description:
    "Sachez à qui vous avez à faire ! Découvrez mon parcours, mes compétences et mes valeurs. Autant d'atouts que je saurai mettre à votre service pour vous accompagner dans la création de votre site web sur mesure.",
// Open Graph metadata
openGraph: {
  title: "À Propos | Compagnon de Com'",
  description:
    
  "Sachez à qui vous avez à faire ! Découvrez mon parcours, mes compétences et mes valeurs. Autant d'atouts que je saurai mettre à votre service pour vous accompagner dans la création de votre site web sur mesure.",
  url: "https://www.compagnondecom.fr/about_me", 
  type: "website",
  site_name: "Compagnon de Com'",
  locale: "fr_FR",
  
},

};

export default function AboutLayout({ children }) {
  return  <>{children}</>;
}
