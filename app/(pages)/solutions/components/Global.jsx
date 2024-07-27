
import { solutions_global } from "@/datas/solutions_global";
import Frame from "./Frame";

export default function Global() {
    
  let modulo = 1;

  return (
    <div className={`container`}>
      {solutions_global.map((solution, index) => (
        <Frame key={index} solution={solution} index={index} modulo={modulo} />
      ))}
    </div>
  );
}
