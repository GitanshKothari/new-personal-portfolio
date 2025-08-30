"use client";

import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineLineProps {
  containerRef: RefObject<HTMLElement>;
}

export function TimelineLine({ containerRef }: TimelineLineProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/20 origin-top -translate-x-1/2"
      />
      
      {/* Dynamic Scroll-Linked Progress Bar */}
      <motion.div
        className="absolute left-1/2 top-0 w-1 origin-top -translate-x-1/2 transition-all duration-300 ease-out"
        style={{
          height: progressHeight,
          background: "linear-gradient(to bottom, rgb(139, 92, 246), rgb(139, 92, 246))",
          boxShadow: "0 0 20px rgb(139, 92, 246), 0 0 40px rgb(139, 92, 246), 0 0 60px rgb(139, 92, 246), 0 0 80px rgb(139, 92, 246)"
        }}
      />
    </>
  );
}
