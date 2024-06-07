"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

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
    <header className="py-6 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="duration-200 hover:opacity-80">
          <Link href="/">
            <h2 className="text-clip">Compagnon de Com&apos;</h2>
          </Link>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p>Solutions</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col items-center space-x-4">
                        <div className="mt-4 mb-2 text-lg font-medium text-start">
                          <h5>Les possibilités</h5>
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          D&apos;un site préfabriqué à une solution sur mesure, statique ou dynamique, je vous expose les 4 principales possibilités qui s&apos;offrent à vous.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <Link href="/docs/installation" title="Installation">
                    Un site dynamique
                  </Link>
                  <Link href="/docs/primitives/typography" title="Typography">
                    Un site statique
                  </Link>
                  <Link href="/docs" title="Introduction">
                   Conception autonome /<br/>  Site préfabriqué
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger><p>Déroulé</p></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger><p>Tarifs</p></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
           
          </NavigationMenuList>
        </NavigationMenu>
        
        <Link href="/">
          <button className="px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200">
            <p className="font-semibold pb-0.5">Contact</p>
          </button>
        </Link>
      </div>
    </header>
  );
}
