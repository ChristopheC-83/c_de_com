"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import MenuScreen from "./components/MenuScreen";
import MenuMobile from "./components/MenuMobile";

export default function Header() {
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  return (
    <header className="z-50 py-3 shadow-md md:py-6">
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
