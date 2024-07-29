import Intro from "./components/Intro";
import Conclusion from "./components/Conclusion";
import DynamicPrice from "./components/Dynamic";
import StaticPrice from "./components/Static";
import Compare from "./components/Compare";

export default function Prices() {
  return (
    <div>
      <h1 className={`text-clip w-fit mx-auto md:mt-6`}>Combien ça coûte ?</h1>
      {/* Les conditions d'un tarif */}

      <Intro />
    <Compare />
    
    <h2 className={`text-clip mt-10 mb-6 w-fit mx-auto`}>En détail :</h2>
      {/* tarif pour un site statique */}
      <StaticPrice />

      {/* tarif pour un site dynamique */}
      <DynamicPrice />

      {/*  A prendre en compte */}
      <Conclusion />
    </div>
  );
}
