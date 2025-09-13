/* MDX components mapping for Contentlayer rendering */
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  a: (props) => (
    <Link
      {...(props as any)}
      className="text-primary underline-offset-4 hover:underline"
    />
  ),
  Image: (props: any) => (
    <Image {...props} alt={props.alt ?? ""} sizes="(min-width: 768px) 700px, 100vw" />
  ),
  img: (props: any) => (
    <Image {...props} alt={props.alt ?? ""} width={1200} height={700} sizes="100vw" />
  ),
};

