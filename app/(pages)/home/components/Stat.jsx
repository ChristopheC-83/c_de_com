"use client";
import { statInternet } from "@/datas/statInternet";
import { motion } from "framer-motion";
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
import { buttonVariants } from "@/lib/framerVariants";

export default function Stat() {
  // console.log(statInternet);

  const words = "Le saviez-vous ?";
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.25 + i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="container px-4 mt-0 overflow-x-hidden xs:px-6 md:px-8">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="flex items-center justify-between my-6 min-w-[300px]">
          <div className="gap-4 px-4 py-2 mx-auto my-3 rounded-full flexMid bg-neutral-50/50 shadow_spectre">
            <motion.div
              initial={buttonVariants.initialStateFromLeft}
              animate={buttonVariants.finalState}
            >
              <CarouselPrevious variant="arrow" className="text-white pulse-left" />
            </motion.div>

            <div className="flex justify-center pb-2">
              {letters.map((letter, i) => (
                <motion.h2
                  key={i}
                  variants={pullupVariant}
                  initial="initial"
                  animate="animate"
                  custom={i}
                  className="text-center font-display text-clip font-bold tracking-[-0.02em]  "
                >
                  {letter === " " ? <span>&nbsp;</span> : letter}
                </motion.h2>
              ))}
            </div>

            <motion.div
              initial={buttonVariants.initialStateFromRight}
              animate={buttonVariants.finalState}
            >
              <CarouselNext variant="arrow" className="text-white pulse-right" />
            </motion.div>
          </div>
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
