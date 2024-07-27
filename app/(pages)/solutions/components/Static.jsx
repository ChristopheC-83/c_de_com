

import { solutions_static } from "@/datas/solutions_static";
import { solutions_global } from "@/datas/solutions_global";
import Frame from "./Frame";

export default function Static() {

  let modulo;

  if(solutions_global.length % 2 === 0){
    modulo = 1;
  } else{
    modulo = 0;
  }

  return (
    <div className={`container`} >
      <div className={`w-fit mx-auto`}>
        <h1 className={`text-clip w-fit mx-auto my-10`}>Un site statique ?</h1>
        
      </div>
      {solutions_static.map((solution, index) => (
        <Frame key={index} solution={solution} index={index} modulo={modulo}/>
      ))}
    </div>
  );
}
