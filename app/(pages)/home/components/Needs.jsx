/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";
import { needsItems } from "@/datas/needsItems";
import { Button } from "@/components/ui/button";
import IconsUsers from "./_IconsUsers";
import idea from "@/public/images/frames/idea.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Needs() {
  return (
    <div className="container px-4 overflow-x-hidden xs:px-6 md:px-8">
      <Separator />
      <div className="flex items-center justify-between my-6">
        <div className="basis-1/2 sm:justify-start sm:items-start midFlex">
          <Image
            src={idea}
            alt="christophe c."
            width={250}
            height={250}
            className="object-cover border-2 rounded-full shadow border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 customShadow aspect-square"
            priority={true}
          />
        </div>
        <h2 className="pl-3 mx-auto text-clip basis-1/2">
          Déterminons vos besoins !
        </h2>
      </div>
      <div className="flex justify-between w-full gap-4 pb-4 max-md:flex-col">
        {needsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between w-[49%] p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full"
          >
            <div className="flex items-end justify-center w-full mb-6 gap-x-10 xs:gap-x-20">
              {item.icons.map((icon, index) => (
                  <IconsUsers key={index} datas={icon} index={index}/>
              ))}
            </div>
            <p
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>

            <Link
              href={item.href}
              className="p-4 mb-3 text-white duration-200 rounded-full bg-clip hover:opacity-80 "
            >
              <h4>{item.text_btn}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
