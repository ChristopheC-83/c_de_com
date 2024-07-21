"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import MenuScreen from "./components/MenuScreen";
import MenuMobile from "./components/MenuMobile";

export default function Header() {
 

  return (
    <header className="z-50 px-2 py-3 shadow-md md:py-6 md:px-4">
      <div className="container flex items-center justify-between px-1">
        <div className="duration-200 hover:opacity-80">
          <Link href="/">
            <h2 className="text-clip text-nowrap">Compagnon de Com&apos;</h2>
          </Link>
        </div>
        <div className="flex max-md:hidden">
          <MenuScreen />{" "}
          
        </div>

        <Link href="/contact" className="max-md:hidden">
          <button className="px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200">
            <p className="font-semibold pb-0.5">Contact</p>
          </button>
        </Link>
        <div className=" md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
