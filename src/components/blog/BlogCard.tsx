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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group rounded-xl border border-border/60 bg-card/60 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <Link href={post.url} className="block">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {post.description}
        </p>
        {post.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
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

