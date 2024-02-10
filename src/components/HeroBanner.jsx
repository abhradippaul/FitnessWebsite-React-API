import React from "react";
import { Button } from "@/components/ui/button";
import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <section className="px-5 h-[90dvh] flex flex-col-reverse items-center justify-between md:relative md:flex-row">
      <div className="h-[30dvh] mb-8 w-full flex flex-col justify-around items-center md:h-1/2 md:w-1/2 md:items-start md:mb-0">
        <h1 className="text-red-500 font-semibold text-xl md:text-2xl">
          Fitness Club
        </h1>
        <div className="text-2xl font-bold w-3/4 md:w-full md:text-4xl">
          <h1 className="text-center md:text-start">Sweat, Smile and Repeat</h1>
        </div>
        <p className="md:text-lg">Check out the most effective exercises</p>
        <Button
          className="max-w-52 w-3/4 md:text-lg"
          variant="destructive"
          size="lg"
        >
          Explore Exercises
        </Button>
      </div>
      <h1 className="hidden text-red-500 absolute bottom-4 opacity-15 text-9xl z-10  md:block">
        Exercises
      </h1>
      <img
        className="h-[50dvh] max-w-[550px] object-cover overflow-hidden md:rounded-es-[10%] md:h-full md:w-3/4 md:relative md:top-[-12%] md:right-0"
        src={HeroBannerImage}
        alt="Hero image"
      />
    </section>
  );
}

export default HeroBanner;
