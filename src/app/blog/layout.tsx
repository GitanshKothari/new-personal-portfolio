import { BlogNavbar } from "@/components/blog/BlogNavbar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <BlogNavbar />
      {/* No padding, full bleed */}
      <main className="w-full">{children}</main>
    </div>
  );
}
