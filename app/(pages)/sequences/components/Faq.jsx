import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/datas/faqItems";
import Link from "next/link";

export default function Faq() {
  return (
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
  );
}
