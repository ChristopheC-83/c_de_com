"use client";

import { capitalize } from "@/helpers/capitalize";
import { MdOutlineTouchApp } from "react-icons/md";

export default function StatCard({ stat }) {

  function chooseStat(id) {
    console.log(id);
  }
  
  return (
    <div className="w-[220px] h-full hover:scale-105 duration-300 " onClick={() => chooseStat(stat.id)}>
      <div className="w-full h-full rounded-xl min-h-24 bg-neutral-50 cursor-grab customShadow customBorder">
        <div className="flex flex-col justify-between p-2 overflow-hidden gap-y-4">
          <div className="flex flex-col">
            <div className={`flex items-start justify-between gap-x-3`}>
              <div className={`pb-2 pl-2 text-3xl midFlex w-full h-24 bg-clip rounded-xl`}><h4 className="scale-150 text-neutral-50">{stat.qtt}</h4></div>
              
            </div>
            <h4 className="p-2 mx-auto mt-6 mb-4 text-3xl rounded-full cursor-pointer animate-pulse bg-clip w-fit flip_hover">
              <MdOutlineTouchApp />
            </h4>
          </div>
          <p>{stat.text}</p>
        </div>
      </div>
    </div>
  );
}
