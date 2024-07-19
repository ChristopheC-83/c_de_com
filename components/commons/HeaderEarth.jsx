import Earth from "@/components/magicui/Earth";

export function HeaderEarth() {
  return (
    <div className="relative flex aspect-[1/1] w-full h-[30vw] max-h-[530px] min-h-[250px] items-start justify-center overflow-hidden rounded-lg border bg-background px-40 pb-20 pt-8 md:pb-40 shadow-xl ">
      <h2 className="font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none min-w-[100vw] md:scale-150 bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
       Votre site.<br />Votre zone de communication
      </h2>
      <Earth className="top-[40px] xs:top-[-20px] lg:top-[70px] max-lg:scale-75" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
