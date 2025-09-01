"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import {
  Home,
  BookOpen,
  FolderKanban,
  FileText,
  User,
  FileCode2,
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
    icon: <BookOpen className="h-5 w-5" />,
    label: "Education",
    href: "#education",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-400",
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
    icon: <FileText className="h-5 w-5" />,
    label: "Blog",
    href: "#blog",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(21,128,61,0.1) 50%, rgba(22,163,74,0) 100%)",
    iconColor: "text-green-400",
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
    icon: <FileCode2 className="h-5 w-5" />,
    label: "Resume",
    href: "#resume",
    gradient:
      "radial-gradient(circle, rgba(20,184,166,0.2) 0%, rgba(13,148,136,0.1) 50%, rgba(15,118,110,0) 100%)",
    iconColor: "text-teal-400",
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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-gradient-to-b from-zinc-950/80 to-zinc-900/40 backdrop-blur-xl border border-zinc-800/40 shadow-lg"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-purple-400/10 via-indigo-400/10 to-transparent rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />

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
                <span
                  className={`transition-colors duration-300 ${item.iconColor}`}
                >
                  {item.icon}
                </span>
                <Link href={item.href}>{item.label}</Link>
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
                <span
                  className={`transition-colors duration-300 ${item.iconColor}`}
                >
                  {item.icon}
                </span>
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
