import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["band", "songs", "albums"];

  return (
    <div
      id="jannabi"
      className="h-[40rem] flex justify-center items-center px-4"
    >
      <div className="text-8xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        what is my favorite
        <FlipWords words={words} /> <br />
        at the moment?
      </div>
    </div>
  );
}
