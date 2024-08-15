import Link from "next/link";
import FooterNetworks from "./components/FooterNetworks";
import LegalAndContact from "./components/LegalAndContact";


 export default function Footer() {



return (
    <div className="w-full pb-8 mt-16 bg-card text-card-foreground box-shadow">
      <div className="container">
          <Link href="/">
            <h3 className="mt-2 text-center text-clip sm:hidden">Compagnon de Com&apos;</h3>
          </Link>
          
        <div className="flex flex-col-reverse w-full h-fit sm:flex-row">
          <div className="flex flex-1">
            <LegalAndContact />
          </div>
          <div className="flex flex-1">
            <FooterNetworks />
          </div>
        </div>
      </div>
    </div>

  );

}