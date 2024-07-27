import Dynamic from "./components/Dynamic";
import Global from "./components/Global";
import Static from "./components/Static";
import WordPress from "./components/WordPress";

export default function Solutions() {
  return (
    <div>
      <h1 className={`text-clip w-fit mx-auto md:mt-6`}>Votre site Internet ?</h1>
      <h1 className={`text-clip w-fit mx-auto`}>Mes solutions !</h1>
      {/* vue globale */}
      <div className="min-h-96">
        <Global />
      </div>
      {/* solution statique */}
      <div className="min-h-96" id="static">
        <Static />
      </div>
      {/* solution dynamique */}
      <div className="min-h-96" id="dynamic">
        <Dynamic />
      </div>
      {/* solution préconçue  */}
      <div className="min-h-96" id="wordpress">
        <WordPress />
      </div>
    </div>
  );
}
