"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";
import { experienceData } from "./experienceData";

export function Timeline() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section ref={containerRef} id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={timelineVariants}
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

        <div className="grid grid-cols-12 gap-y-20 relative z-10">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="contents">
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
          })}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />
    </section>
  );
}

function ExperienceCard({ item, hovered }: { item: any; hovered: boolean }) {
  return (
    <Card className="relative overflow-hidden group shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl bg-background/40 border border-white/20">
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={
          hovered
            ? {
                background: [
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.1), transparent, rgba(139, 92, 246, 0.15))",
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.15), transparent, rgba(139, 92, 246, 0.1))",
                  "linear-gradient(225deg, rgba(139, 92, 246, 0.1), transparent, rgba(139, 92, 246, 0.15))",
                  "linear-gradient(315deg, rgba(139, 92, 246, 0.15), transparent, rgba(139, 92, 246, 0.1))",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      <CardContent className="p-6 relative z-10">
        <motion.div 
          className="flex items-start gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {item.logo && (
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={hovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={48}
                  height={48}
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {item.role}
            </h3>
            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
              <Building className="h-4 w-4" />
              {item.company}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.location}
              </div>
              {item.type && (
                <Badge variant="outline" className="text-xs bg-white/10 border-white/20">
                  {item.type}
                </Badge>
              )}
            </div>
          </motion.div>
        </motion.div>

        {item.description && (
          <motion.p 
            className="text-muted-foreground mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {item.description}
          </motion.p>
        )}

        {item.keyTakeaways && (
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="font-semibold mb-2">
              Key Takeaways
            </h4>
            <ul className="space-y-1">
              {item.keyTakeaways.map((takeaway: string, i: number) => (
                <motion.li 
                  key={i} 
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  {takeaway}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {item.tech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h4 className="font-semibold mb-2 text-sm">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs bg-white/10 border-white/20">
                    {t}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
