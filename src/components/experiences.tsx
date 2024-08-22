import React from "react";
import { InfiniteMovingCardsDemo } from "@/components/moving";

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-1 text-white">
        And some of my experiences too
      </h2>

      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Experiences;
