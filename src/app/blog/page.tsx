import { allPosts, type Post } from "contentlayer/generated";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogHero } from "@/components/blog/BlogHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Gitansh Kothari",
  description: "Thoughts, tutorials, and insights on machine learning, web development, and technology.",
};

function sortPosts(posts: Post[]) {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage() {
  const posts = sortPosts(allPosts);
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                A highlighted read I recommend checking out first.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <BlogCard post={featuredPost} />
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Recent Articles</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore my latest thoughts on machine learning, web development, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {/* View All Posts Link */}
          <div className="text-center mt-12">
            <Link
              href="/blog/articles"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
