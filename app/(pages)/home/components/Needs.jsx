/* eslint-disable react/no-unescaped-entities */
"use client";

import { needsItems } from "@/datas/needsItems";
import IconsUsers from "./_IconsUsers";
import idea from "@/public/images/frames/idea.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/framerVariants";

export default function Needs() {
  return (
    <div className="container px-4 overflow-x-hidden xs:px-6 md:px-8">
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
      <div className="flex justify-between w-full gap-4 pb-10 md:pb-12 max-md:flex-col ">
        {needsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between w-[49%] p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white "
          >
            <motion.div
              className="flex items-end justify-center w-full mb-6 gap-x-10 xs:gap-x-20 "
              initial={buttonVariants.initialStateFromUp}
              whileInView={buttonVariants.finalState}
              viewport={{ once: true }}
            >
              {item.icons.map((icon, index) => (
                <IconsUsers key={index} datas={icon} index={index} />
              ))}
            </motion.div>
            <p
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
            <motion.div
              initial={buttonVariants.initialStateFromDown}
              whileInView={buttonVariants.finalState}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="flex p-4 mb-3 text-white duration-200 rounded-full shadow-lg bg-clip hover:opacity-80"
              >
                <h4>{item.text_btn}</h4>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
