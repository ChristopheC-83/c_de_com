
import { solutions_static } from "@/datas/solutions_static";
import { solutions_global } from "@/datas/solutions_global";
import { solutions_dynamic } from "@/datas/solutions_dynamic";
import Frame from "./Frame";

 export default function Dynamic() {

  let modulo;
  let modulo_calcul = solutions_global.length + solutions_static.length;
  console.log("modulo_calcul", modulo_calcul);

  if(modulo_calcul % 2 === 0){
    modulo = 1;
  } else{
    modulo = 0;
  }

return (
  <div className={`container`} >
  <div className={`w-fit mx-auto`}>
    <h1 className={`text-clip w-fit mx-auto my-10`}>Un site dynamique ?</h1>
    
  </div>
  {solutions_dynamic.map((solution, index) => (
    <Frame key={index} solution={solution} index={index} modulo={modulo}/>
  ))}
</div>

  );

}