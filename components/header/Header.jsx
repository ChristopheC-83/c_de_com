"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import MenuScreen from "./components/MenuScreen";
import MenuMobile from "./components/MenuMobile";
import { buttonVariants } from "@/lib/framerVariants";

export default function Header() {
  const text = "Compagnon de Com'";
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="z-50 px-2 py-3 shadow-md md:py-6 md:px-4">
      <div className="container flex items-center justify-between px-1">
        <div className="duration-200 hover:opacity-80">
          <div className="flex justify-center space-x-1">
            <AnimatePresence>
              {text.split("").map((char, i) => (
                <motion.h2
                  key={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={gradual}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center font-display font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] text-clip text-nowrap"
                >
                  <Link href="/">
                    {char === " " ? <span>&nbsp;</span> : char}
                  </Link>
                </motion.h2>
              ))}
            </AnimatePresence>
          </div>

          {/* <Link href="/">
            <h2 className="text-clip text-nowrap">Compagnon de Com&apos;</h2>
          </Link> */}
        </div>
        <div className="flex max-md:hidden">
          <MenuScreen />{" "}
        </div>

        <motion.div 
              initial={buttonVariants.initialStateFromRight}
              animate={buttonVariants.finalState}>
          <Link href="/contact" className="max-md:hidden">
            <button className="px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200">
              <p className="font-semibold pb-0.5">Contact</p>
            </button>
          </Link>
        </motion.div>
        <div className=" md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
