"use client";

import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

export function HeroText() {
  return (
    <div className="flex-1 space-y-6 text-center md:text-left z-10">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi! I&apos;m <span className="text-brand-400">Gitansh Kothari</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300">
        <Typewriter
          words={["A Software Engineer", "An ML Engineer"]}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <p className="max-w-lg text-zinc-400 mx-auto md:mx-0">
        I design and build intelligent systems — blending software engineering
        with cutting-edge machine learning. Welcome to my portfolio.
      </p>

      <div className="flex gap-4 justify-center md:justify-start">
        <Button asChild>
          <a href="/resume">View Resume</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="mailto:gitansh@example.com">Contact</a>
        </Button>
      </div>
    </div>
  );
}
