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
import Link from "next/link";
import { menuLinks } from "@/datas/menuLinks";
import ListItem from "./ListItem";

export default function MenuScreen() {
  return (
    
      <NavigationMenu>
        <NavigationMenuList>
          {/* Les Déroulants */}
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
                          dangerouslySetInnerHTML={{
                            __html: menuLink.text,
                          }}
                        ></p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <div className="flex-col">
                    {menuLink.links.map((link, idx) => (
                     <Link href={link.href} key={idx} className="p-3 space-y-1">
                     <p>
                       <u>{link.title}</u>
                     </p>
                   </Link>
                    ))}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
     
  
  );
}
