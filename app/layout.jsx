import "@/public/style/globals.css";
import "@/public/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "Compagnon de Com'",
  description: "Développez votre communication avec un site web sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-svh bg-neutral-100">
        <Header />
        <main className="w-full grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
