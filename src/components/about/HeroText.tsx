"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export function HeroText() {
  return (
    <div className="relative flex-1 space-y-6 text-center md:text-left z-10">
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full -z-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -right-32 w-96 h-96 bg-indigo-500/20 blur-[140px] rounded-full -z-10"
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi! I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          Gitansh Kothari
        </span>
      </motion.h1>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-zinc-300"
      >
        <Typewriter
          words={["A Software Engineer", "An ML Engineer"]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="max-w-lg text-zinc-400 mx-auto md:mx-0"
      >
        I design and build intelligent systems — blending software engineering
        with cutting-edge machine learning. Welcome to my portfolio.
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="flex gap-4 justify-center md:justify-start"
      >
        <Button
          asChild
          className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
        >
          <a href="/resume">View Resume</a>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <a href="mailto:gitansh@example.com">Contact</a>
        </Button>
      </motion.div>
    </div>
  );
}
