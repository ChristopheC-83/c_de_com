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
      <SheetContent side="top" className="bg-neutral-100">
        <SheetHeader>
          <SheetTitle>Une Question ?</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start mt-10 justify-evenly gap-y-8">
          {/* Menu ici */}
          <NavigationMenu>
            <NavigationMenuList data-orientation="horizontal" className="">
              {/* Solutions */}
              {menuLinks.map((menuLink, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>
                    <h4>{menuLink.menu}</h4>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-20">
                    <ul className="grid gap-3 p-6 w-[280px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex flex-col items-center space-x-4">
                            <div className="mt-4 mb-2 text-lg font-medium text-start">
                              <h5>{menuLink.title}</h5>
                            </div>
                            <p
                              className="leading-tight text-md text-muted-foreground"
                              dangerouslySetInnerHTML={{ __html: menuLink.text }}
                            ></p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      {menuLink.links.map((link, idx) => (

                      <Link key={idx} href={link.href} >
                       <p><u>{link.title}</u></p>
                      </Link>
                        
                      ))}
                    
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
