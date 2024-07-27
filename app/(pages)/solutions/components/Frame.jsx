import Image from "next/image";

export default function Frame({ solution, index, modulo }) {
  return (
    <div
      className={`flex max-md:flex-col my-16 md:my-24 max-md:gap-y-16
        ${index % 2 === modulo ? "flex-row-reverse" : "flex-row"}
        ${index % 2 === modulo ? "gap-x-12" : "gap-x-8"}
        `}
      key={index}
    >
      {/* cadre + image */}
      <div
        className={`relative flex flex-col md:w-1/2  min-w-[250px] min-h-[166px] aspect-[5/3]
           max-md:${index % 2 === modulo ? "translate-x-8" : " "}
          `}
      >
        {/* cadre */}
        <div
          className={`absolute inset-0
             ${index % 2 === modulo ? "left-[7.5%]" : "left-[2.5%]"}
             top-[10%] rounded-xl customBorder customShadow  w-[90%] aspect-[3/2] opacity-50 bg-clip-opacity`}
        >
          <div className="absolute top-[5%] left-[3%] w-[94%] h-[90%] bg-neutral-100 rounded-xl customBorder bottomShadowL"></div>
        </div>
        {/* image */}
        <div
          className={`absolute aspect-[3/2] rounded-xl w-[90%] customBorder customShadowMd overflow-auto top-0
             ${index % 2 === modulo ? "left-0" : "right-0"}
                right-0`}
        >
          <Image
            src={solution.illustration}
            alt={solution.title}
            fill
            className={`absolute object-cover inset-0`}
          />
        </div>
      </div>
      {/* partie texte */}
      <div className="flex flex-col w-1/2 max-md:w-full">
        <div className="flex flex-col">
          <div className="relative py-4 pl-12 ml-2 md:ml-6 rounded-xl customBorder customShadow ">
            <div className="absolute top-0 overflow-hidden rounded-full shadow-lg customBorder size-16 bg-clip-opacity -translate-y-[33%] left-0 -translate-x-[33%]">
              <div className="posMid aspect-square w-[90%] customBorder rounded-full bg-neutral-50 ">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  fill
                  className={`absolute  object-cover scale-[0.65] top-[-10px] filterShadow`}
                />
              </div>
            </div>
            <h3>{solution.title}</h3>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: solution.text,
            }}
            className={`pl-3 md:pl-6 mt-4`}
          ></p>
        </div>
      </div>
    </div>
  );
}
