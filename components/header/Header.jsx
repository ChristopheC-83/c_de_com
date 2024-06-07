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
            {/* Solutions */}
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
                          Un site préfabriqué ou une solution sur mesure ?<br />
                          Statique ou dynamique
                          <br />
                          Regardons ensemble
                          <br /> 4 possibilités !
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
                    Conception autonome /<br /> Site préfabriqué
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* déroulé */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p>Déroulé</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col items-center space-x-4">
                        <div className="mt-4 mb-2 text-lg font-medium text-start">
                          <h5 className="text-center">
                            Comment <br /> ça se passe ?
                          </h5>
                        </div>
                        <li
                          href="/deroule"
                          className="text-sm leading-tight text-muted-foreground"
                        >
                          Pas de surprise ! <br />
                          Vos besoins, vos envies,
                          <br />
                          mon expérience,
                          <br />
                          mes compétences.
                          <br />
                          <br />
                          <strong>VOTRE outil de communivation !</strong>
                        </li>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex flex-col items-center">
                    <Link href="/deroule">Votre site web en X étaptes !</Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* tarifs*/}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p>Tarifs</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col items-center space-x-4">
                        <div className="mt-4 mb-2 text-lg font-medium text-start">
                          <h5>Les tarifs.</h5>
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Plat à la carte ou menu ?<br />
                          Menu complet ?<br />
                          ou plat / dessert ?
                          <br />
                          <br />
                          <strong>Débrousaillons la question !</strong>
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <Link href="/docs/installation" title="Installation">
                    menu des tarifs
                  </Link>
                  <Link href="/docs/primitives/typography" title="Typography">
                    Pour un site vitrine.
                  </Link>
                  <Link href="/docs" title="Introduction">
                    Pour un site administrable.
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/contact">
          <button className="px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200">
            <p className="font-semibold pb-0.5">Contact</p>
          </button>
        </Link>
      </div>
    </header>
  );
}
