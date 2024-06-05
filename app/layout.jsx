
import "@/public/style/globals.css";
import "@/public/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-svh bg-neutral-100">
        <Header />
        <main className="grow ">{children}</main>
         <Footer />
      </body>
    </html>
  );
}
