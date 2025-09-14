"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, BookOpen, User, ArrowLeft } from "lucide-react";

const blogMenuItems = [
  {
    icon: <Home className="h-4 w-4" />,
    label: "Blog Home",
    href: "/blog",
    color: "text-blue-400",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    label: "Articles",
    href: "/blog/articles",
    color: "text-green-400",
  },
  {
    icon: <User className="h-4 w-4" />,
    label: "About",
    href: "/blog/about",
    color: "text-purple-400",
  },
];

export function BlogNavbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Portfolio Link */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Blog Navigation */}
          <div className="flex items-center gap-1">
            {blogMenuItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 hover:shadow-lg"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Blog Title */}
          <div className="text-white/60 text-sm font-medium">
            Gitansh&apos;s Blog
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
