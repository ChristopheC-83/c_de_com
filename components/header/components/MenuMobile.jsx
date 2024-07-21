import { GiHamburgerMenu } from "react-icons/gi";

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
          <GiHamburgerMenu className="scale-[1.5]" />
        </div>
      </SheetTrigger>
      <SheetContent side="top" className="p-2 bg-neutral-100">
        <SheetHeader>
          <SheetTitle>Une Question ?</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start justify-between mt-10 gap-y-8">
          {/* Menu ici */}
          <NavigationMenu className="max-xs:-translate-x-7">
            <NavigationMenuList data-orientation="horizontal" className="max-xs:scale-[0.9] ">
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
                          <p>
                            <u>{link.title}</u>
                          </p>
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
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="danger" className="mt-10">
              Fermer
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
