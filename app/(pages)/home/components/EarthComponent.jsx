import Earth from "@/components/magicui/Earth";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function EarthComponent() {
  return (
    <div className="container max-md:overflow-hidden max-md:midFlex max-sm:px-0">
      <AspectRatio ratio={2 / 1}>
        <div className="flex w-full h-full max-md:flexMid max-md:mx-auto">
          <div className="flex items-start justify-start h-full basis-2/5 max-md:absolute max-md:inset-0 ">
            <div className="relative w-full md:scale-125 md:translate-x-[12.5%] min-w-[300px] max-md:w-[80vw] max-md:mx-auto">
              <Earth />
            </div>
          </div>
          <div className="z-20 mx-0 flexMid max-md:mx-auto max-md:flex-col max-md:basis-3/5 max-md:w-screen">
            <div className="flex-col px-8 py-4 lg:px-10 lg:py-6 text-white rounded-full flexMid w-fit bg-clip box-shadow max-sm:scale-[0.7] max-md:scale-[0.80] max-lg:scale-[0.95] text-nowrap max-md:mx-0 ">
                <h1 className="w-fit">Votre Site Internet</h1>
                <h3 className="mb-2 w-fit">Votre espace de communication</h3>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
