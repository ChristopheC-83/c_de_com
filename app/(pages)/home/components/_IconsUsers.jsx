"use client";

import Icons from "./_Icons";

export default function _IconsUsers({ datas, index }) {
  return (
    <div className={`relative cursor-pointer group `}>
      <Icons > {datas.icon} </Icons>
      <div className="absolute shadow-lg">
        <div
          className={`flex-col items-start hidden w-40 p-2 text-sm text-white duration-300 shadow-xl rounded-xl bg-neutral-900 group-hover:flex 
            ${index == 1 ? "-translate-x-[45px] " : ""}
            ${index == 2 ? "-translate-x-[110px]" : ""}
            }
            translate-y-2
                        
                        `}
        >
          <p className="mb-3 text-sm">Vous êtes :</p>
          <div className="flex flex-col">
            {datas.tooltip.map((tip, index) => (
              <span key={index} className="mb-1">
                {tip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
