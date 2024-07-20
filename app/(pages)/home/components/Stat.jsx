import { statInternet } from "@/datas/statInternet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StatCard from "./StatCard";
import StatDetails from "./StatDetails";

export default function Stat() {
  // console.log(statInternet);
  return (
    <div className="container mt-0 overflow-x-hidden">
      <Carousel className="w-full" opts={{
          align: "start",
          loop: true,
        }}>
        <div className="gap-4 mx-auto my-3 flexMid">
          <CarouselPrevious variant="arrow" className="text-white"/>
          <h2 className="pb-3 text-clip w-fit ">
            Le saviez-vous ?
          </h2>
          <CarouselNext variant="arrow" className="text-white"/>
        </div>
        <CarouselContent>
          {statInternet.map((stat) => (
            <CarouselItem
              key={stat.id}
              className="mb-4 ml-4 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 midflex "
            >
              <StatCard stat={stat} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="h-[375px] w-full"><StatDetails/></div>
    </div>
  );
}
