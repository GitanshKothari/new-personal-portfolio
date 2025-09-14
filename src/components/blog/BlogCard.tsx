"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "contentlayer/generated";

type Props = {
  post: Post;
};

export function BlogCard({ post }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <Link href={post.url} className="block">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors mb-3 hover:shadow-lg">
          {post.title}
        </h3>
        <p className="text-white/60 text-sm mb-3">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>
        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full hover:bg-purple-500/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </Link>
    </motion.article>
  );
}

