"use client";

import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <AccordionRoot type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
