import "@/public/style/globals.css";
import "@/public/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemesProvider from "@/providers/ThemesProvider";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { locale } from "yargs";
<link rel="icon" href="/favicon.ico" sizes="any" />;

export const metadata = {
  title: "Le Compagnon de votre Communication Web | Compagnon de Com'",
  description:
    "Développez votre communication avec un site web sur mesure. Site vitrine ou site modifiable ? Je serai votre Compagnon de Com' pour vous accompagner dans la création de votre communication digitale.",
    
  // Open Graph metadata
  openGraph: {
    title: "Le Compagnon de votre Communication Web | Compagnon de Com'",
    description:
      "Développez votre communication avec un site web sur mesure. Site vitrine ou site modifiable ? Je serai votre Compagnon de Com' pour vous accompagner dans la création de votre communication digitale.",
    url: "https://www.compagnondecom.fr/", 
    type: "website",
    site_name: "Compagnon de Com'",
    locale: "fr_FR",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="Dd5wfp1u1R8BFpmJSlIDbfFdXqCm5xNdXUVHGXKfaug" />
      </head>
      <body className="flex flex-col min-h-svh bg-neutral-100">
        <QueryProvider>
          <ThemesProvider>
            <Header />
            <Toaster position="top-center" richColors expand={true} />
            <main className="w-full grow">{children}</main>
            <Footer />
          </ThemesProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
