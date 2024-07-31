"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { frameVariants } from "@/lib/framerVariants";

/* eslint-disable react/no-unescaped-entities */
export default function Intro() {
  return (
    <div className="container ">
      <motion.div
        id="price_static"
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}
      
        className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
      >
        <h4 className={`textShadowClip text-center my-6`}>
          Vous avez déterminé ce dont vous avez besoin ?
        </h4>
        <div className="flex flex-col items-center w-full mb-4 md:w-fit">
          <p>Si non, on va mettre tout ça au clair.</p>
          <Link href="/contact">
            <h5
              className={`px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200 w-fit my-4`}
            >
              Contactez-moi !
            </h5>
          </Link>
        </div>
        <p>Si oui, continuons ensemble !</p>
        <p>
          Vous avez compris qu'un site statique de 3 à 5 pages ne sera pas la même charge
          de développement que pour un site dynamique.
        </p>
        <p>Voyons pourquoi !</p>
      </motion.div>
    </div>
  );
}
