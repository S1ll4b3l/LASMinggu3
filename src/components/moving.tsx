import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Learned a lot about cybersecurity basics.",
    title: "ITBOX Basic Cyber Security Course",
    name: "July 2024 - Present",
  },
  {
    quote: "Learned a lot about cybersecurity basics.",
    title: "Website Development Mini Bootcamp by GDSC",
    name: "February 2024",
  },
  {
    quote: "Learned a lot about cybersecurity basics.",
    title: "Dicoding Basic Dev-Ops",
    name: "November 2023",
  },
  {
    quote: "Learned a lot about cybersecurity basics.",
    title: "Basic Cyber Security and ISO 27001 Awareness by TAALENTA",
    name: "November 2022",
  },
];
