import React from "react";
import ThreeDCardDemo from "@/components/card";

const Heros = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-7 place-self-center text-center md:text-left space-y-2 md:space-y-4">
          <h1 className="text-white mb-2 md:mb-4 text-3xl md:text-4xl lg:text-6xl font-bold">
            Hello, my name is Timothy
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl">
            Not afraid of challenges, and break the barriers ahead!
          </p>
        </div>

        <div className="col-span-12 md:col-span-5 mt-4 md:mt-0">
          <ThreeDCardDemo />
        </div>
      </div>
    </section>
  );
};

export default Heros;
