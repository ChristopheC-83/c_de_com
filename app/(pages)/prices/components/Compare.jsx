import { compareItems } from "@/datas/compareItems";
import Image from "next/image";

export default function Compare() {
  return (
    <div className="container">
        <h2 className={`text-clip mt-10 mb-6 w-fit mx-auto`}>En bref :</h2>
      <div
        className={`w-full max-w-[400px] flex flex-col customBorder customShadow rounded-xl  my-8 md:my-12 mx-auto text-center`}
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
      </div>
    </div>
  );
}
