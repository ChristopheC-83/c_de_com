"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/datas/faqItems";
import { motion } from "framer-motion";
import Link from "next/link";

import {  frameVariants } from "@/lib/framerVariants";
export default function Faq() {
  return (
    <motion.div
      initial={frameVariants.initialState}
      whileInView={frameVariants.finalState}
      viewport={{ once: true }}
    >
      <h1 className={`text-clip w-fit mx-auto  mt-8 md:mt-12`} id="faq">
        FAQ et Garanties
      </h1>
      <Accordion type="single" collapsible className="container">
        {faqItems.map((item) => (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full pr-8">
                <h3>{item.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="p-2 bg-card">{item.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
