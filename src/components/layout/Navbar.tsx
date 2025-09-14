"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import {
  Home,
  BookOpen,
  FolderKanban,
  FileText,
  User,
  Wrench,
  FileText as FileTextIcon,
  PenTool,
} from "lucide-react";

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#home",
    gradient:
      "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(109,40,217,0.1) 50%, rgba(67,56,202,0) 100%)",
    iconColor: "text-purple-400",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(185,28,28,0.1) 50%, rgba(127,29,29,0) 100%)",
    iconColor: "text-red-400",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Education",
    href: "#education",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-400",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Experience",
    href: "#experience",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(21,128,61,0.1) 50%, rgba(22,163,74,0) 100%)",
    iconColor: "text-green-400",
  },
  {
    icon: <FolderKanban className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient:
      "radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(190,24,93,0.1) 50%, rgba(136,19,55,0) 100%)",
    iconColor: "text-pink-400",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    label: "Skills",
    href: "#skills",
    gradient:
      "radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(217,119,6,0.1) 50%, rgba(180,83,9,0) 100%)",
    iconColor: "text-amber-400",
  },
  {
    icon: <FileTextIcon className="h-5 w-5" />,
    label: "Resume",
    href: "/resume",
    gradient:
      "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(79,70,229,0.1) 50%, rgba(67,56,202,0) 100%)",
    iconColor: "text-indigo-400",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    label: "Blog",
    href: "/blog",
    gradient:
      "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(147,51,234,0.1) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-violet-400",
  },
];

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-zinc-950/80 to-zinc-900/40 backdrop-blur-xl border-b border-zinc-800/40 shadow-lg"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-purple-400/10 via-indigo-400/10 to-transparent z-0 pointer-events-none"
        variants={navGlowVariants}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />

              <motion.div
                className="flex items-center gap-2 px-4 py-2 relative z-10 text-zinc-400 group-hover:text-white transition-colors rounded-xl cursor-pointer"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <span
                    className={`transition-colors duration-300 ${item.iconColor}`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 text-zinc-400 group-hover:text-white transition-colors rounded-xl cursor-pointer"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  rotateX: 90,
                }}
              >
                <Link href={item.href} className="flex items-center gap-2">
                  <span
                    className={`transition-colors duration-300 ${item.iconColor}`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </motion.div>
            </motion.div>
          </motion.li>
        ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
