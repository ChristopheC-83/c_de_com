import "@/public/style/globals.css";
import "@/public/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemesProvider from "@/providers/ThemesProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Compagnon de Com'",
  description: "Développez votre communication avec un site web sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-svh bg-neutral-100">
        <ThemesProvider>
          <Header />
          <Toaster position="top-center" richColors expand={false} />
          <main className="w-full grow">{children}</main>
          <Footer />
        </ThemesProvider>
      </body>
    </html>
  );
}
