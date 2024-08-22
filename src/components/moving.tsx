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
    quote: "ITBOX ",
    title: "Basic Cyber Security Course",
    name: "July 2024 - Present",
  },
  {
    quote: "Google Developer Student Club",
    title: "Website Development Mini Bootcamp",
    name: "February 2024",
  },
  {
    quote: "Dicoding",
    title: "Basic Dev-Ops",
    name: "November 2023",
  },
  {
    quote: "TAALENTA",
    title: "Basic Cyber Security and ISO 27001 Awareness",
    name: "November 2022",
  },
];
