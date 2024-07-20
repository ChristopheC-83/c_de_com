"use client";

import { statInternet } from "@/datas/statInternet";
import { useStatsStore } from "@/store/StatStore";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function StatDetails() {
  const { selectedStat } = useStatsStore();

  const stat = statInternet.find((stat) => stat.id === selectedStat);

  return (
    <div className="container">
      <div className="flex flex-col w-full h-auto  mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4">
        <div className="flexMid">
          <h3 className="p-2 m-2 text-white bg-clip midFlex rounded-xl text-nowrap">
            {stat.qtt}
          </h3>
          <h5>{stat.text}</h5>
        </div>
        <div className="flex">
          <div className="w-3/12 midFlex max-md:hidden">
            <FaRegQuestionCircle className="text-8xl filterShadow text-color2 rotate-[-12deg]" />
          </div>
          <p className="w-full mx-auto mb-2 md:w-6/12" 
                dangerouslySetInnerHTML={{ __html: stat.explain }}></p>
          <div className="w-3/12 midFlex max-md:hidden">
            <FaRegQuestionCircle className="text-8xl filterShadow text-color2 rotate-[25deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}
