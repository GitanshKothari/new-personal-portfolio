"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const card =
  "relative rounded-2xl bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)] p-6 flex flex-col";

export default function Education() {
  const educationData = [
    {
      school: "University of Toronto",
      degree: "BASc · Computer Engineering",
      period: "2020 – 2025",
      gpa: "GPA 3.81",
      minors: ["Artificial Intelligence", "Engineering Business"],
      courses: [
        "Machine Learning",
        "Neural Networks",
        "Operating Systems",
        "Database Systems",
      ],
      logo: "/education/uoft-logo.png",
    },
    {
      school: "Greenwood High International School",
      degree: "High School Diploma · IBDP",
      period: "2016 – 2020",
      gpa: "40/45",
      minors: [],
      courses: ["Math HL", "Physics HL", "Economics HL"],
      logo: "/education/greenwood-logo.png",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Floating cap */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-10 right-16 w-24 h-24 text-purple-400 opacity-80 z-20"
      >
        <GraduationCap size={96} className="w-full h-full" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-200"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className={card}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    {edu.school}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">{edu.degree}</p>
                  <p className="text-zinc-400 text-sm">{edu.period}</p>
                </div>
                {edu.gpa && (
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-300 border border-purple-500/40">
                    {edu.gpa}
                  </span>
                )}
              </div>

              {edu.minors.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
                    Minors
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.minors.map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.courses.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wide text-purple-300 mb-2">
                    Relevant Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
