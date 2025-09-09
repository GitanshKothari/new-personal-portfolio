import React, { useRef, useState } from "react";
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
  Clipboard,
  ClipboardCheck,
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Research",
  "Build",
  "Test",
  "Deploy",
];
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
    <div id="about" className="min-h-screen  text-white p-4">
      <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 md:grid-cols-12 md:grid-rows-8 gap-4">    
        <motion.div
          variants={slideInLeft}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-12 md:col-span-2 md:row-span-8 ${card} p-4`}
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
              <div>🧠 ML Model Development</div>
              <div>⚛️ Full-Stack Development</div>
              <div>☁️ Cloud Solutions</div>
              <div>🔧 Software Engineering</div>
            </div>
            <button className="w-full rounded-lg py-2 text-xs font-medium bg-purple-600 hover:bg-purple-500 transition-colors mt-3">
              View All Services
            </button>
          </div>
        </motion.div>


        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-12 sm:col-span-6 md:col-span-2 md:row-span-2 ${statBox}`}
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
          className={`col-span-12 sm:col-span-6 md:col-span-2 md:row-span-2 ${statBox}`}
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
          className={`col-span-12 sm:col-span-6 md:col-span-2 md:row-span-2 ${statBox}`}
        >
          <div className="text-4xl font-bold">03+</div>
          <div className="flex items-center gap-2 text-sm mt-1 text-purple-300">
            <span className="text-zinc-300">
              <CalendarClock />
            </span>
            Years Experience
          </div>
        </motion.div>

        <motion.div
          variants={slideInTop}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-12 md:col-span-4 md:row-span-2 ${card} p-4 flex flex-col justify-center`}
        >
          <div className="text-2xl mb-2 text-purple-300 text-center">
            👋 Follow Me
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 w-full">
            <a
              href="https://github.com/GitanshKothari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800/50 hover:text-white transition-colors w-full"
            >
              <span className="text-xl"><Github /></span>
              <span className="truncate">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gitansh-kothari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800/50 hover:text-white transition-colors w-full"
            >
              <span className="text-xl"><Linkedin /></span>
              <span className="truncate">LinkedIn</span>
            </a>
          </div>

          <MarkdownCopyEmail />
        </motion.div>

        <motion.div
          ref={profileRef}
          variants={profileEffect}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className={`col-span-12 md:col-span-6 md:row-span-4 ${card} p-6`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-xs text-zinc-300">Available To Work</span>
                </div>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-purple-600 border border-purple-500 px-4 py-0.5 rounded-lg hover:bg-purple-500 transition-colors font-semibold text-white shadow"
                >
                  Resume
                </a>
              </div>
              <h2 className="text-2xl font-bold mb-1">Gitansh Kothari</h2>
              <p className="text-zinc-400 text-sm">
                Computer Engineering Graduate & ML Engineers
              </p>
            </div>
          </div>

          

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">📍 Location</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <MapPin size={16} />
                Toronto, Canada
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Clock size={16} />
                EST Timezone
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">🎓 Education</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <GraduationCap size={16} />
                UofT Graduate
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Languages size={16} />
                English & Hindi
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">💼 Current Role</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Briefcase size={16} />
                Seeking Full-Time Opportunities
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">🎯 Focus Areas</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span>👁️</span> Computer Vision
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span>🧠</span> Reinforcement Learning
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span>🚗</span> Autonomous Vehicles
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-12 md:col-span-4 md:row-span-4 ${card} p-6 relative`}
        >
          <div className={tileTitle}>📁 Projects</div>
          <div className={tileHeading}>Works Gallery</div>
          <div className="mt-4 grid grid-cols-2 gap-3 relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-500/60 to-purple-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-500/60 to-purple-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan-500/50 to-indigo-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-violet-500/50 to-fuchsia-600/60 shadow-xl backdrop-blur-md scale-95 opacity-80" />
            <button
              className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 w-3/4 rounded-lg py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors shadow-2xl"
              style={{ pointerEvents: "auto" }}
            >
              View All Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={slideInBottom}
          animate={profileInView ? "visible" : "hidden"}
          className={`col-span-12 md:col-span-6 md:row-span-2 ${card} p-4`}
        >
          <div className={tileTitle}>⚙️ My Work Process</div>
          
          {/* Work Process Steps - Zigzag Pattern */}
          <div className="mt-4">
            <div className="flex flex-wrap justify-center items-start gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-7">
                  {/* Diamond Card with alternating vertical position */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative w-20 h-20 ${index % 2 === 1 ? 'mt-8' : 'mt-0'}`}
                  >
                    <div className="absolute inset-0 rotate-45 border border-zinc-600 rounded-lg"></div>
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168,85,247,0.3)" }}
                      className="absolute inset-1 rotate-45 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 flex items-center justify-center text-center rounded-lg"
                    >
                      <span className="-rotate-45 font-medium text-xs text-center leading-tight px-1">
                        {step}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Arrow except for last one */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className={`text-purple-400 ${index % 2 === 1 ? 'mt-6' : 'mt-6 -ml-2'}`}
                    >
                      {index % 2 === 0 ? (
                        <ArrowDownRight className="w-6 h-6" />
                      ) : (
                        <ArrowUpRight className="w-6 h-6" />
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInBottom}
          animate={profileInView ? "visible" : "hidden"}
          className="col-span-12 md:col-span-4 md:row-span-2 rounded-2xl p-4 border border-purple-500/40 bg-gradient-to-br from-purple-600/30 to-indigo-600/30"
        >
          <div className="text-center">
            <h3 className="font-bold text-lg mb-1">Let&apos;s Work Together</h3>
            <p className="text-sm mb-4 text-zinc-200/80">
              Let&apos;s make something great.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:gitanshkothari2002@gmail.com?subject=Let's Connect&body=Hi Gitansh,%0D%0A%0D%0AI'd love to connect with you.%0D%0A%0D%0ABest regards,"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg py-2 text-sm font-medium bg-white text-purple-800 hover:bg-gray-100 transition-colors text-center"
              >
                📧 Email Me
              </a>
              <a 
                href="https://calendly.com/gitanshkothari2002/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors text-center"
              >
                📅 Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MarkdownCopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "gitanshkothari2002@gmail.com";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch {
      // swallow
    }
  };

  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-zinc-900/60">
      <div className="px-4 py-3 font-mono text-sm text-zinc-200/90 truncate" title={email}>
        {email}
      </div>
      <div className="pr-2">
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/60 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700/60 transition-colors border border-white/10"
        >
          {copied ? (
            <>
              <ClipboardCheck size={16} />
              Copied
            </>
          ) : (
            <>
              <Clipboard size={16} />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
