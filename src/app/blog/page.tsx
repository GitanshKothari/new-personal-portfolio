import { allPosts, type Post } from "contentlayer/generated";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, notes, and deep dives on ML and web dev.",
};

function sortPosts(posts: Post[]) {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage() {
  const posts = sortPosts(allPosts);
  return (
    <main className="min-h-screen bg-purple-noir px-5 py-10">
      <div className="mx-auto mb-8 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Latest posts and write-ups.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}

