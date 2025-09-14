import React from "react";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import MDXContent from "../../../components/blog/MDXContent";
import Image from "next/image";
import Link from "next/link";
type Params = { params: Promise<{ slug: string }> };

export const dynamic = 'force-dynamic';

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
    <main className="min-h-screen bg-black">
      <header className="relative bg-black text-white py-16">
  <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
    
    {/* Left: text */}
    <div className="max-w-xl">
      <span className="text-sm uppercase tracking-wide text-purple-400">
        {post.tags?.[0]}
      </span>
      <h1 className="mt-4 text-5xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg text-zinc-300">{post.description}</p>
      <div className="mt-6 flex items-center gap-4 text-sm text-zinc-400">
        <Image src="/author-avatar.jpg" alt="Author" width={40} height={40} className="h-10 w-10 rounded-full" />
        <div>
          <p className="font-medium text-white">Gitansh Kothari</p>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>

    {/* Right: big hero image */}
    {post.image && (
      <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-xl shadow-lg">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-contain"
    />
    </div>
    
    )}
  </div>
</header>


  
      <BlogLayout>
        <MDXContent code={post.body.code} />
      </BlogLayout>
  
      <nav className="mx-auto mt-16 flex max-w-3xl items-center justify-between border-t border-white/10 pt-6 text-sm text-zinc-400">
        <div>
          {prev ? (
            <Link className="hover:text-purple-400 transition-colors" href={prev.url}>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div>
          {next ? (
            <Link className="hover:text-purple-400 transition-colors" href={next.url}>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
  
}
