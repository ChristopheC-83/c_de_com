"use client";
import Intro from "./components/Intro";
import Conclusion from "./components/Conclusion";
import DynamicPrice from "./components/Dynamic";
import StaticPrice from "./components/Static";
import Compare from "./components/Compare";
import Freelance from "./components/Freelance";
import { motion } from "framer-motion";
import { buttonVariants, frameVariants } from "@/lib/framerVariants";

export default function Prices() {
  return (
    <div>
      <motion.h1
        className={`text-clip w-fit mx-auto md:mt-6`}
        initial={buttonVariants.initialStateFromDown}
        whileInView={buttonVariants.finalState}
        viewport={{ once: true }}
      >
        Combien ça coûte ?
      </motion.h1>
      {/* Les conditions d'un tarif */}

      <Intro />
      <Compare />

      <h2 className={`text-clip mt-10 mb-6 w-fit mx-auto`}>
        Plus précisément :
      </h2>
      {/* tarif pour un site statique */}
      <motion.div
        id="price_static"
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}
      >
        <StaticPrice />
      </motion.div>

      {/* tarif pour un site dynamique */}
      <motion.div
        id="price_dynamic"
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}
      >
        <DynamicPrice />
      </motion.div>
      {/* Arrangement */}
      <motion.div
        id="arrangement"
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}
      >
        <Freelance />
      </motion.div>

      {/*  A prendre en compte */}
      <Conclusion />
    </div>
  );
}
