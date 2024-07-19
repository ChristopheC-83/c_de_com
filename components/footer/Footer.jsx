import FooterNetworks from "./components/FooterNetworks";
import LegalAndContact from "./components/LegalAndContact";


 export default function Footer() {



return (
    <div className="w-full pb-8 mt-16 bg-card text-card-foreground box-shadow">
      <div className="container">
          <h3 className="text-center text-clip sm:hidden">Christophe CHIAPPETTA</h3>
          
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