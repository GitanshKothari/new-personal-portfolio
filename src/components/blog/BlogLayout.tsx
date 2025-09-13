import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-8">
      <article className="prose prose-invert max-w-3xl mx-auto">
        {children}
      </article>
    </section>
  );
}

