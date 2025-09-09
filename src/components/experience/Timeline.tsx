"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { experienceData } from "./experienceData";
import { TimelineLine } from "./TimelineLine";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Experience" align="center" />

        <div className="relative">
          <TimelineLine containerRef={containerRef} />

          <div className="grid grid-cols-12 gap-y-20 relative z-10">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />
    </section>
  );
}
