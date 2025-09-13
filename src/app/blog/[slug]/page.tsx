import React from "react";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import MDXContent from "../../../components/blog/MDXContent";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p._raw.flattenedPath.split('/').pop() }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath.split('/').pop() === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://example.com${post.url}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath.split('/').pop() === slug);
  if (!post) return notFound();

  const sorted = allPosts
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const idx = sorted.findIndex((p) => p._id === post._id);
  const prev = sorted[idx - 1];
  const next = sorted[idx + 1];

  return (
    <main className="min-h-screen bg-purple-noir px-5 py-10">
      <header className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <div className="mt-2 text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
          {post.tags?.length ? (
            <span> • {post.tags.join(" · ")}</span>
          ) : null}
        </div>
      </header>

      <BlogLayout>
        {/* MDX content */}
        <MDXContent code={post.body.code} />
      </BlogLayout>

      <nav className="mx-auto mt-10 flex max-w-3xl items-center justify-between border-t border-border/60 pt-6 text-sm">
        <div>
          {prev ? (
            <a className="text-muted-foreground hover:text-primary" href={prev.url}>
              ← {prev.title}
            </a>
          ) : (
            <span />
          )}
        </div>
        <div>
          {next ? (
            <a className="text-muted-foreground hover:text-primary" href={next.url}>
              {next.title} →
            </a>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}

