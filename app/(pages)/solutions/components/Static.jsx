/* eslint-disable react/no-unescaped-entities */

import { solutions_static } from "@/datas/solutions_static";
import { solutions_global } from "@/datas/solutions_global";
import Frame from "./Frame";

export default function Static() {
  console.log("longueur : ");
  console.log(solutions_global.length);

  let modulo;

  if(solutions_global.length % 2 === 0){
    modulo = 1;
  } else{
    modulo = 0;
  }

  return (
    <div className={`container`} id="static">
      <div className={`w-fit mx-auto`}>
        <h1 className={`text-clip w-fit mx-auto my-10`}>Un site statique ?</h1>
        <p>
          Vous avez besoin de montrer votre savoir-faire, vos compétences?{" "}
          <br />
          Besoin de mettre en avant un évènement ou un lieu ? Vos prestations ?
        </p>
        <h4 className={`text-center mt-2 mb-4`}>Voilà ce qu'il vous faut !</h4>

        <p>
          {" "}
          Un site dit "statique " est un site web qui ne change pas en fonction
          de l'utilisateur. <br />
          Son contenu est fixe ( à moins que votre développeur préféré mette ses
          mains dans le code !). <br />
          Le chargement est rapide, la sécurité est optimale. <br />
        </p>
      </div>
      {solutions_static.map((solution, index) => (
        <Frame key={index} solution={solution} index={index} modulo={modulo}/>
      ))}
    </div>
  );
}
