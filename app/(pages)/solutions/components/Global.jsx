
import { solutions_global } from "@/datas/solutions_global";
import Frame from "./Frame";

export default function Global() {
    
  let modulo = 1;

  return (
    <div className={`container`}>
      {solutions_global.map((item, index) => (
        <Frame key={index} item={item} index={index} modulo={modulo} />
      ))}
    </div>
  );
}
