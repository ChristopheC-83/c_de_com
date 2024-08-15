import { GiHamburgerMenu } from "react-icons/gi";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuScreen from "./MenuScreen";
import { menuLinks } from "@/datas/menuLinks";

export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <div className="z-50 p-2 rounded-full bg-foreground text-background w-fit">
          <GiHamburgerMenu className="scale-[1.5] text-neutral-600" />
        </div>
      </SheetTrigger>
      <SheetContent side="top" className="p-2 bg-neutral-100">
        <SheetHeader>
          <SheetTitle>Une Question ?</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start justify-between mt-10 gap-y-8">
          <div className="flex justify-between px-5 w-[80%] mx-auto">
            <SheetPrimitive.Close asChild>
              <Link href="/">
                <h5
                  className={`px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200`}
                >
                  Accueil
                </h5>
              </Link>
            </SheetPrimitive.Close>

            <SheetPrimitive.Close asChild>
              <Link href="/contactez_moi">
                <h5
                  className={`px-4 py-0.5 text-white rounded-full bg-clip hover:opacity-80 duration-200`}
                >
                  Contact
                </h5>
              </Link>
            </SheetPrimitive.Close>
          </div>
          {/* Menu ici */}
          <NavigationMenu className="mb-8 ml-[4vw] xs:ml-[10vw] midflex max-xs:-translate-x-7">
            <NavigationMenuList
              data-orientation="vertical"
              className="max-xs:scale-[0.9] flex justify-between mx-auto"
            >
              {/* Les Déroulants */}
              {menuLinks.map((menuLink, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>
                    <h4>{menuLink.menu}</h4>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-20 mx-auto flexMid">
                    <ul className="grid gap-3 p-6 w-[280px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] max-xs:mx-auto max-xs:translate-x-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex flex-col items-center space-x-4">
                            <div className="mt-4 mb-2 text-lg font-medium text-start">
                              <h5>{menuLink.title}</h5>
                            </div>
                            <p
                              className="leading-tight text-md text-muted-foreground"
                              dangerouslySetInnerHTML={{
                                __html: menuLink.text,
                              }}
                            ></p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      {menuLink.links.map((link, idx) => (
                        <Link key={idx} href={link.href}>
                          <SheetPrimitive.Close asChild>
                            <p>
                              <u>{link.title}</u>
                            </p>
                          </SheetPrimitive.Close>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Les liens directs */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
