"use client";

import { motion } from "framer-motion";
import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ title, subtitle, align = "center", className = "" }: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 mb-12 ${alignmentClasses} ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-primary/80 ${align === "center" ? "mx-auto" : ""} w-20 rounded-full`} />
    </motion.div>
  );
}

export default SectionHeader;


