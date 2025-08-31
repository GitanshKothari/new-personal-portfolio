"use client";

import { HeroText } from "./HeroText";
import { LaptopScene } from "./LaptopScene";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6">
      <HeroText />

      <div className="flex-1 w-full h-[400px] md:h-[500px]">
        <LaptopScene />
      </div>
    </section>
  );
}
