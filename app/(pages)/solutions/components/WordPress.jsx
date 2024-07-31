/* eslint-disable react/no-unescaped-entities */
"use client";
import { buttonVariants } from "@/lib/framerVariants";
import { motion } from "framer-motion";
export default function WordPress() {
  return (
    <div className={`container mx-auto`}>
      <motion.h1
        className={`text-clip w-fit mx-auto my-10`}
        initial={buttonVariants.initialStateFromDown}
        whileInView={buttonVariants.finalState}
        viewport={{ once: true }}
      >
        Un site préconçu ?
      </motion.h1>
      <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-neutral-50">
        <h3 className={`text-center`}>Je ne propose pas ces services ! </h3>
        <h4 className="mb-4 text-center">(au moins c'est dit !😉)</h4>
        <p>
          <b>
            Mais par soucis de transparence et pour que vous ayez toutes les
            informations pour faire votre choix, <br />
            il existe d'autres possibilités :
          </b>
        </p>
        <h4>Les sites WordPress :</h4>
        <p>
          C'est du Low-Code. <br />
          Comprenez qu'avec une formation, vous pourrez faire votre site
          vous-même ! <br />
          WordPress est un caisse de pièces de Lego. <br />
          <b>Avantages : </b> relativement facile à prendre en main, autonomie
          après une formation (en ligne bien souvent).
          <br />
          <b>Inconvénients : </b> les pièces fonctionnelles sont souvent
          payantes, mise à jour régulière, <br />
          complexes à personnaliser comme on le souhaiterait. Temps pour se
          former + temps pour mettre en place le site.
        </p>
        <br />
        <h4>Les sites faits avec Wix et autres :</h4>
        <p>
          Là, c'est du no-code ! <br />
          Nous n'avons plus des pièces de Lego mais des Playmobil ! <br />
          Encore plus facile à mettre en place, mais avec plus de restrictions.{" "}
          <br />
        </p>

        <h4 className={`text-center`}>
          Finalement, toujours la même question et les mêmes dilemnes... <br />
          d'un coté de la balance :{" "}
          <b>
            <u>l' argent</u>
          </b>
          , <br />
          de l'autre :{" "}
          <b>
            <u>le temps et l'énergie !</u>
          </b>{" "}
          <br />
        </h4>
      </div>
    </div>
  );
}
