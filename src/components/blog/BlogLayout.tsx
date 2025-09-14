export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12">
      <article
        className="
          prose prose-invert
          prose-headings:text-white
          prose-headings:font-semibold
          prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-zinc-300 prose-p:leading-relaxed
          prose-strong:text-white
          prose-a:text-purple-400 hover:prose-a:text-purple-300
          prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:text-zinc-400
          max-w-3xl mx-auto
        "
      >
        {children}
      </article>
    </section>
  );
}
