export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 px-6">
      <article
        className="
          prose prose-invert
          max-w-3xl mx-auto

          /* Headings */
          prose-headings:text-white
          prose-headings:font-semibold
          prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4

          /* Paragraphs */
          prose-p:text-zinc-300
          prose-p:leading-relaxed
          prose-p:mb-6
          prose-p:text-justify

          /* Links */
          prose-a:text-purple-400 hover:prose-a:text-purple-300

          /* Blockquotes */
          prose-blockquote:border-l-4
          prose-blockquote:border-purple-500
          prose-blockquote:pl-5
          prose-blockquote:italic
          prose-blockquote:text-zinc-400
          prose-blockquote:my-8

          /* Lists */
          prose-ul:my-6 prose-li:my-2

          /* Images */
          prose-img:rounded-xl prose-img:mt-8 prose-img:mb-2

          /* Figure captions */
          prose-figcaption:text-center
          prose-figcaption:text-sm
          prose-figcaption:text-zinc-400
          prose-figcaption:italic
          prose-figcaption:mt-2
          prose-figcaption:mb-6

          /* Code blocks */
          prose-pre:bg-black/60
          prose-pre:border prose-pre:border-white/10
          prose-pre:rounded-xl prose-pre:p-5 prose-pre:my-8
        "
      >
        {children}
      </article>
    </section>
  );
}
