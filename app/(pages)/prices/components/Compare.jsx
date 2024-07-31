"use client";
import { compareItems } from "@/datas/compareItems";
import Image from "next/image";
import { motion } from "framer-motion";
import { frameVariants } from "@/lib/framerVariants";

export default function Compare() {
  const legend = [
    {
      label: "oui",
      image: "/images/price/oui.png",
    },
    {
      label: "non",
      image: "/images/price/non.png",
    },
    {
      label: "option",
      image: "/images/price/option.png",
    },
  ];

  return (
    <div className="container">
      <h2 className={`text-clip mt-10 mb-6 w-fit mx-auto`}>
        Quelques détails :
      </h2>
      <motion.div
        initial={frameVariants.initialState}
        whileInView={frameVariants.finalState}
        viewport={{ once: true }}
        className={`w-full max-w-[600px] flex flex-col customBorder customShadow rounded-xl  mt-8 md:mt-12 mx-auto text-center`}
      >
        <div className={`flexMid w-full border-b-2 border-neutral-200 py-3`}>
          <div className={`w-[130px] flexMid `}>
            <h4>
              Site <br /> Statique
            </h4>
          </div>
          <div className={`grow flexMid border-x-2 border-neutral-200 `}>
            <h4>Critères</h4>
          </div>
          <div className={`w-[130px] flexMid `}>
            <h4>
              Site <br /> Dynamique
            </h4>
          </div>
        </div>
        {compareItems.map((item, index) => (
          <div key={index} className={`flexMid w-full  py-3`}>
            <div className={`w-[70px] flexMid `}>
              <Image
                src={item.static}
                alt={item.static}
                width={50}
                height={50}
                className={`object-contain`}
              />
            </div>
            <div
              className={`grow flexMid border-x-2 border-neutral-200 flex-col`}
              dangerouslySetInnerHTML={{ __html: item.critere }}
            ></div>
            <div className={`w-[70px] flexMid  `}>
              <Image
                src={item.dynamic}
                alt={item.dynamic}
                width={50}
                height={50}
                className={`object-cover`}
              />
            </div>
          </div>
        ))}
        <div className="flex ">
          <div className="w-1/2 mx-3">
            <div className="p-4 mb-3 text-white duration-200 rounded-full shadow-lg bg-clip ">
              <h5>Dès 1200€ HT</h5>
              <small>site statique</small>
            </div>
          </div>
          <div className="w-1/2 mx-3">
            <div className="p-4 mb-3 text-white duration-200 rounded-full shadow-lg bg-clip ">
              <h5>Dès 2500€ HT</h5>
              <small>site dynamique</small>
            </div>
          </div>
        </div>
      </motion.div>
      <div
        className={`w-full max-w-[200px] flex  customBorder customShadow rounded-xl  my-2 md:my-3 mx-auto text-center pt-1 pb-1 flex-col`}
      >
        <h5 className={`w-fit text-clip mx-auto pb-1 pt-0`}>Légende</h5>
        <div className="flex">
          {legend.map((item, index) => (
            <div
              className={`flex-col w-1/3 flexMid
            ${item.label === "non" ? "border-x-2" : ""}
            `}
              key={index}
            >
              <Image
                src={item.image}
                alt={item.label}
                width={30}
                height={30}
                className={`object-contain`}
              />
              <h5 className={`py-0`}>{item.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
