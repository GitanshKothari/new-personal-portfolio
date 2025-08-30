"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  item: any;
  hovered: boolean;
}

export function ExperienceCard({ item, hovered }: ExperienceCardProps) {
  return (
    <Card className="relative overflow-hidden group shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl bg-black/20 border border-white/5 rounded-2xl">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-2xl" />
      
      {/* Diagonal Shine Lines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out delay-200" />
      </div>
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={
          hovered
            ? {
                background: [
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.08), transparent, rgba(139, 92, 246, 0.12))",
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.12), transparent, rgba(139, 92, 246, 0.08))",
                  "linear-gradient(225deg, rgba(139, 92, 246, 0.08), transparent, rgba(139, 92, 246, 0.12))",
                  "linear-gradient(315deg, rgba(139, 92, 246, 0.12), transparent, rgba(139, 92, 246, 0.08))",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 rounded-2xl" />
      
      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
