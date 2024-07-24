"use client";

import Icons from "./_Icons";

export default function _IconsUsers({ datas }) {
  return (
    
          <div className={`relative cursor-pointer group`}>
              <Icons size={datas.size} > {datas.icon} </Icons>
              <div className="absolute">
                    <div className="flex-col items-start hidden w-40 p-2 text-sm text-white duration-300 shadow-lg rounded-xl bg-neutral-900 group-hover:flex">
                        <p className="mb-3 text-sm">Vous êtes :</p>
                        <div className="flex flex-col">
                            {datas.tooltip.map((tip, index) => (
                                <span key={index} className="mb-1">{tip}</span>
                            ))}
                        </div>
                    </div>
              </div>
          </div>
  );
}
