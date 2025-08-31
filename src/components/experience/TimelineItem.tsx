"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceItem } from "./experienceData";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}

export function TimelineItem({
  item,
  index,
  hoveredCard,
  setHoveredCard,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateX: -15,
      rotateY: -10,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotateX: -5,
      rotateY: -3,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      rotateX: 3,
      rotateY: 5,
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="contents">
      <div className={`col-span-5 ${isLeft ? "flex justify-end" : ""}`}>
        {isLeft && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{ perspective: "1200px", transformOrigin: "center center" }}
            className="w-[90%] relative"
          >
            <div className="absolute right-0 top-1/2 w-12 h-0.5 bg-gradient-to-l from-primary to-transparent transform translate-x-full" />
            <ExperienceCard item={item} hovered={hoveredCard === index} />
          </motion.div>
        )}
      </div>

      <div className="col-span-2 flex justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-noir-900 shadow-lg"
        >
          <div className="w-2 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>

      <div className={`col-span-5 ${!isLeft ? "flex justify-start" : ""}`}>
        {!isLeft && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{ perspective: "1200px", transformOrigin: "center center" }}
            className="w-[90%] relative"
          >
            <div className="absolute left-0 top-1/2 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-full" />
            <ExperienceCard item={item} hovered={hoveredCard === index} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
