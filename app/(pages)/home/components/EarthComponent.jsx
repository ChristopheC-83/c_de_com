import Earth from "@/components/magicui/Earth";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function EarthComponent() {
  return (
    <AspectRatio ratio={2 / 1}>
      <div className="flex w-full h-full ">
        <div className="flex items-start justify-start h-full basis-2/5">
          <div className="relative w-full scale-125 translate-x-[12.5%]">
            <Earth />
          </div>
        </div>
        <div className="z-20 flex flex-col justify-center basis-3/5">
          <div className="flex-col p-10 text-white rounded-full flexMid w-fit bg-clip box-shadow">
              <h1 className="w-fit">Votre Site Internet</h1>
              <h3 className="w-fit">Votre espace de communication</h3>
          </div>
        </div>
      </div>
    </AspectRatio>
  );
}
