import Intro from "./components/Intro";
import Conclusion from "./components/Conclusion";
import DynamicPrice from "./components/Dynamic";
import StaticPrice from "./components/Static";
import Compare from "./components/Compare";
import Freelance from "./components/Freelance";

export default function Prices() {
  return (
    <div>
      {/* Les conditions d'un tarif */}

      <Intro />
      <Compare />

      <h2 className={`text-clip mt-10 mb-6 w-fit mx-auto`}>
        Plus précisément :
      </h2>
      {/* tarif pour un site statique */}
      <div id="price_static">
        <StaticPrice />
      </div>

      {/* tarif pour un site dynamique */}
      <div id="price_dynamic">
        <DynamicPrice />
      </div>
      {/* Arrangement */}
      <div id="arrangement">
        <Freelance />
      </div>

      {/*  A prendre en compte */}
      <Conclusion />
    </div>
  );
}
