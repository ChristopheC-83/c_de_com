"use client";

import { statInternet } from "@/datas/statInternet";
import { useStatsStore } from "@/store/StatStore";
import { FaRegQuestionCircle } from "react-icons/fa";
import {motion} from "framer-motion";
import { buttonVariants } from "@/lib/framerVariants";

export default function StatDetails() {
  const { selectedStat } = useStatsStore();

  const stat = statInternet.find((stat) => stat.id === selectedStat);

  return (
    <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-neutral-50">
      <div className="flexMid">
        <h3 className="p-2 m-2 text-white shadow-lg bg-clip midFlex rounded-xl text-nowrap">
          {stat.qtt}
        </h3>
        <h5>{stat.text}</h5>
      </div>
      <div className="flex flex-col items-center sm:flex-row">
        <motion.div className="w-3/12 midFlex max-md:hidden" 
              initial={buttonVariants.initialStateFromLeft}
              whileInView={buttonVariants.finalState}>
          <FaRegQuestionCircle className="text-8xl filterShadow text-color2 rotate-[-12deg] max-md:scale-95" />
        </motion.div>
          <p
            className="w-full mx-auto mb-2 md:w-6/12"
            dangerouslySetInnerHTML={{ __html: stat.explain }}
          ></p>
        <motion.div className="w-3/12 midFlex max-md:hidden"
              initial={buttonVariants.initialStateFromRight}
              whileInView={buttonVariants.finalState}>
          <FaRegQuestionCircle className="text-8xl filterShadow text-color2 rotate-[25deg] max-md:scale-95" />
        </motion.div>
      </div>
    </div>
  );
}
