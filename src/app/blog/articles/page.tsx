import { allPosts, type Post } from "contentlayer/generated";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Articles - Gitansh's Blog",
  description: "All articles and posts on machine learning, web development, and technology.",
};

function sortPosts(posts: Post[]) {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function ArticlesPage() {
  const posts = sortPosts(allPosts);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">All Articles</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            A collection of my thoughts, tutorials, and insights on technology and development.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* No posts message */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/70 text-lg">No articles published yet.</p>
            <p className="text-white/50 mt-2">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
