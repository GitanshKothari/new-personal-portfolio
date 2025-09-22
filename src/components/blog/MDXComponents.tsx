import NextImage, { type ImageProps } from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type {
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  HTMLAttributes,
} from "react";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href ?? "#"}
      {...rest}
      className="text-purple-400 underline-offset-4 hover:text-purple-300 hover:underline transition-colors"
    >
      {children}
    </Link>
  ),

  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className="text-zinc-300 leading-relaxed text-justify mb-6"
    />
  ),

  Image: (props: ImageProps) => (
    <NextImage
      {...props}
      alt={props.alt ?? ""}
      sizes="(min-width: 768px) 700px, 100vw"
      className="rounded-xl border border-white/10 shadow-lg mt-6 mb-2"
    />
  ),

  img: (props: ImgHTMLAttributes<HTMLImageElement> & { src: string }) => (
    <NextImage
      src={props.src}
      alt={props.alt ?? ""}
      width={1200}
      height={700}
      sizes="100vw"
      className="rounded-xl border border-white/10 shadow-lg mt-6 mb-2"
    />
  ),

  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="border-l-4 border-purple-500 pl-4 italic text-zinc-400 my-6"
    />
  ),

  code: (props: HTMLAttributes<HTMLElement>) => {
    if (typeof props.children === "string") {
      return (
        <code className="bg-black/40 px-1.5 py-0.5 rounded font-mono text-sm text-gray-200">
          {props.children}
        </code>
      );
    }
    return <code {...props} />;
  },

  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="bg-black/60 border border-white/10 p-4 rounded-xl overflow-x-auto my-6"
    />
  ),

  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-2xl font-bold mt-10 mb-4 text-white" />
  ),

  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="text-xl font-semibold mt-8 mb-3 text-white" />
  ),

  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className="list-decimal list-outside text-zinc-300 leading-relaxed mb-6 pl-8 space-y-2"
    />
  ),
  
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className="list-disc list-outside text-zinc-300 leading-relaxed mb-6 pl-8 space-y-2"
    />
  ),
  
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="ml-2" />
  ),

  figcaption: (props: HTMLAttributes<HTMLElement>) => (
    <figcaption
      {...props}
      className="!text-center !text-sm !text-zinc-400 !italic !mt-2 !mb-6"
    />
  ),

  Figure: ({ children, caption }: { children: React.ReactNode; caption?: string }) => (
    <figure className="my-6">
      {children}
      {caption && (
        <figcaption className="!text-center !text-sm !text-zinc-400 !italic !mt-2 !mb-6">
          {caption}
        </figcaption>
      )}
    </figure>
  ),

  figure: (props: HTMLAttributes<HTMLElement>) => (
    <figure
      {...props}
      className="my-6"
    />
  ),
  
};
