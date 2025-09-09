import React, { useRef } from "react";
import { useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MapPin,
  Languages,
  Briefcase,
  GraduationCap,
  Clock,
  Linkedin,
  Github,
  Globe,
  FolderKanban,
  Cpu,
  CalendarClock,
} from "lucide-react";
import { motion } from "framer-motion";

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const slideInTop: Variants = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const profileEffect: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)", // purple glow
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const card =
  "rounded-2xl bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";
const tileTitle = "text-purple-300 text-sm mb-2";
const tileHeading = "font-semibold text-[15px] md:text-base";
const statBox = `flex flex-col items-center justify-center ${card} p-4`;

export default function BentoGrid() {
  const profileRef = useRef(null);
  const profileInView = useInView(profileRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div className="min-h-screen  text-white p-4">
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-12 grid-rows-8 gap-4">
        {/* LEFT SIDEBAR (cols 1–2, rows 1–8) */}
        <motion.div
          variants={slideInLeft}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-2 row-span-8 ${card} p-4`}
        >
          <div className={tileTitle}>📚 My Stacks</div>
          <div className={tileHeading}>Tech Arsenal</div>

          <div className="space-y-3 mt-4 text-sm/relaxed text-zinc-300">
            <div className="flex items-center gap-3">
              <span>🐍</span> Python
            </div>
            <div className="flex items-center gap-3">
              <span>🔥</span> PyTorch
            </div>
            <div className="flex items-center gap-3">
              <span>⚛️</span> React
            </div>
            <div className="flex items-center gap-3">
              <span>🚀</span> Next.js
            </div>
            <div className="flex items-center gap-3">
              <span>☁️</span> AWS
            </div>
            <div className="flex items-center gap-3">
              <span>🐳</span> Docker
            </div>
          </div>

         
          <div className="mt-8">
            <div className={tileTitle}>⚙️ Services</div>
            <div className={tileHeading}>Solutions Suite</div>
            <div className="text-xs space-y-2 mt-3 text-zinc-300">
              <div>🤖 ML Model Development</div>
              <div>💻 Full-Stack Development</div>
              <div>☁️ Cloud Solutions</div>
              <div>🔧 Software Engineering</div>
            </div>
            <button className="w-full rounded-lg py-2 text-xs font-medium bg-purple-600 hover:bg-purple-500 transition-colors mt-3">
              View All Services
            </button>
          </div>
        </motion.div>

        {/* TOP ROW — STAT (cols 3–4, rows 1–2) */}

        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-2 row-span-2 ${statBox}`}
        >
          <div className="text-4xl font-bold">10+</div>
          <div className="flex items-center gap-2 text-sm mt-1 text-purple-300">
            <span className="text-zinc-300">
              <FolderKanban />
            </span>
            Projects
          </div>
        </motion.div>
        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-2 row-span-2 ${statBox}`}
        >
          <div className="text-4xl font-bold">20+</div>
          <div className="flex items-center gap-2 text-sm mt-1 text-purple-300">
            <span className="text-zinc-300">
              <Cpu />
            </span>
            Technologies
          </div>
        </motion.div>
        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-2 row-span-2 ${statBox}`}
        >
          <div className="text-4xl font-bold">03+</div>
          <div className="flex items-center gap-2 text-sm mt-1 text-purple-300">
            <span className="text-zinc-300">
              <CalendarClock />
            </span>
            Years Experience
          </div>
        </motion.div>

        {/* TOP ROW — ONLINE PRESENCE (fills to end: cols 5–12, rows 1–2) */}
        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-4 row-span-2 ${card} p-4 flex flex-col justify-center`}
        >
          <div className="text-4xl mb-2 text-purple-300 text-center">
            👋 Follow Me
          </div>
          <div className="flex justify-center gap-3 mb-4 flex-wrap">
            <a
              href="#"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 w-12 h-12 text-xl text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
            >
              <Github />
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 w-12 h-12 text-xl text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 w-12 h-12 text-xl text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
            >
              <Briefcase />
            </a>
            <a
              href="#"
              className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 w-12 h-12 text-xl text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
            >
              <Globe />
            </a>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl flex-1 py-3 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              📧 Email Me
            </button>
            <button className="rounded-xl flex-1 py-3 text-sm font-medium bg-zinc-900/60 border border-white/10 hover:bg-zinc-800/60 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              📋 Copy Address
            </button>
          </div>
        </motion.div>

        {/* MIDDLE — MAIN PROFILE (cols 3–8, rows 3–6) */}
        <motion.div
          ref={profileRef}
          variants={profileEffect}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className={`col-span-6 row-span-4 ${card} p-6`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Available To Work
                </div>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-purple-600 border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-500 transition-colors font-semibold text-white shadow"
                >
                  Resume
                </a>
              </div>
              <h2 className="text-xl font-bold">Gitansh Kothari</h2>
              <p className="text-zinc-400">
                Computer Engineering Graduate & ML Engineer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span>
                <MapPin />
              </span>{" "}
              Toronto, Canada
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Languages />
              </span>{" "}
              English &amp; Hindi
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Briefcase />
              </span>{" "}
              Software Engineering Intern
            </div>
            <div className="flex items-center gap-2">
              <span>
                <GraduationCap />
              </span>{" "}
              UofT Graduate
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Clock />
              </span>{" "}
              EST
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span>📷</span> DM me (Instagram)
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span> WhatsApp Me
            </div>
          </div>
        </motion.div>

        {/* MIDDLE RIGHT — LARGE WORK GALLERY (cols 9–12, rows 3–6) */}
        <motion.div
          variants={slideInRight}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-4 row-span-4 ${card} p-6 relative`}
        >
          <div className={tileTitle}>📁 Projects</div>
          <div className={tileHeading}>Works Gallery</div>
          <div className="mt-4 grid grid-cols-2 gap-3 relative">
            {/* Example boxes with background blur, shadow, and slight scale for depth */}
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-500/60 to-purple-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-500/60 to-purple-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan-500/50 to-indigo-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-violet-500/50 to-fuchsia-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            {/* Overlay button */}
            <button
              className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 w-3/4 rounded-lg py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors shadow-2xl"
              style={{ pointerEvents: "auto" }}
            >
              View All Projects
            </button>
          </div>
        </motion.div>

        {/* BOTTOM LEFT — CLIENTS (cols 3–8, rows 7–8) */}
        <motion.div
          variants={slideInBottom}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-6 row-span-2 ${card} p-4`}
        >
          <div className={tileTitle}>👥 My Clients</div>
          <div className={tileHeading}>Satisfied Partners</div>
          <div className="flex items-center justify-between mt-4 text-zinc-400 text-sm">
            <div>Magna Vectrics</div>
            <div>Mad Street Den</div>
            <div>Altiore Capital</div>
            <div>University of Toronto</div>
            <div>Greenwood High</div>
          </div>
        </motion.div>

        {/* BOTTOM RIGHT — CONTACT / CTA (cols 9–12, rows 7–8) */}
        <motion.div
          variants={slideInBottom}
          animate={profileInView ? "visible" : "hidden"}
          className="col-span-4 row-span-2 rounded-2xl p-4 border border-purple-500/40 bg-gradient-to-br from-purple-600/30 to-indigo-600/30"
        >
          <div className="text-center">
            <h3 className="font-bold text-lg mb-1">Let&apos;s Work Together</h3>
            <p className="text-sm mb-4 text-zinc-200/80">
              Let&apos;s make something great.
            </p>
            <div className="space-y-2">
              <button className="w-full rounded-lg py-2 text-sm font-medium bg-white text-purple-800">
                📧 Email Me
              </button>
              <button className="w-full rounded-lg py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors">
                📅 Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
