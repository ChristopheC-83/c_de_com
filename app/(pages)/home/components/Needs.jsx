/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";
import { needsItems } from "@/datas/needsItems";
import Icons from "./_Icons";
import { Button } from "@/components/ui/button";

export default function Needs() {
  return (
    <div className="container px-4 mt-0 overflow-x-hidden xs:px-6 md:px-8">
      <Separator />
      <div className="flex">
        IMAGE D'ILLUSTRATION
        <h2 className="pb-3 mx-auto text-clip w-fit">
          Déterminons vos besoins !
        </h2>
      </div>
      <div className="flex justify-between w-full gap-4 pb-4 max-md:flex-col">
        {needsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between w-[49%] p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full"
          >
            <div className="flex items-end w-full mt-2 mb-5 rounded-full justify-evenly">
                <Icons size="text-2xl"> {item.icon1} </Icons>
                <Icons size="text-4xl"> {item.icon2} </Icons>
                <Icons size="text-2xl"> {item.icon3} </Icons>
              
            </div>
            <p className="mb-5" dangerouslySetInnerHTML={{ __html: item.description }}></p>

            <Button href={item.href} className="p-4 mb-3 text-white duration-200 rounded-full bg-clip hover:opacity-80 "><h4>{item.text_btn}</h4></Button>
          </div>
        ))}
      </div>
    </div>
  );
}
