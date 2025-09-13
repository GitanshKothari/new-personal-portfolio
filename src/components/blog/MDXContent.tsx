"use client";

import React from "react";
import { mdxComponents } from "./MDXComponents";

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  // Create a function from the compiled MDX code
  const compiledCode = new Function('React', code)(React);
  
  // The compiled code returns an object with a default export
  const MDXComponent = compiledCode.default || compiledCode;
  
  return <MDXComponent components={mdxComponents} />;
}
