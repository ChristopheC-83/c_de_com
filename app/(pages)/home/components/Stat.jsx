import { statInternet } from "@/datas/statInternet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StatCard from "./_StatCard";
import StatDetails from "./_StatDetails";
import surprise from "@/public/images/frames/surprise.jpg";
import Image from "next/image";

export default function Stat() {
  // console.log(statInternet);
  return (
    <div className="container px-4 mt-0 overflow-x-hidden xs:px-6 md:px-8">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="flex items-center justify-between my-6">
          <div className="gap-4 mx-auto my-3 flexMid">
            <CarouselPrevious variant="arrow" className="text-white" />
            <h2 className="pb-3 text-clip w-fit ">Le saviez-vous ?</h2>
            <CarouselNext variant="arrow" className="text-white" />
          </div>
          {/* <div className="basis-1/2 sm:justify-start sm:items-start midFlex">
            <Image
              src={surprise}
              alt="christophe c."
              width={250}
              height={250}
              className="object-cover border-2 rounded-full shadow border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 customShadow aspect-square"
              priority={true}
            />
          </div> */}
        </div>
        <CarouselContent>
          {statInternet.map((stat) => (
            <CarouselItem
              key={stat.id}
              className="mb-4 ml-4 basis-1/1 xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 midflex "
            >
              <StatCard stat={stat} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="min-h-[375px] w-full pb-4">
        <StatDetails />
      </div>
    </div>
  );
}
