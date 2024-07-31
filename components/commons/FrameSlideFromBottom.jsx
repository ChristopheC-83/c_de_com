
"use client";

import { motion } from "framer-motion";
import { frameVariants } from "@/lib/framerVariants";


 export default function FrameSlideFromBottom({children}) {



return (
    <motion.div
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}>

    {children}

    </motion.div>

  );

}