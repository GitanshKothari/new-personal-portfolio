import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative w-screen -mx-4 sm:-mx-6 lg:-mx-8">
    {/* Background Image spans full width */}
    <div className="absolute inset-0 scale-[1.1]">
      <Image
        src="/blog/background/blogbackground4.png"
        alt="Futuristic AI banner"
        fill
        priority
        sizes="100vw"
        className="object-contain object-[85%_center]"
      />
      <div className="absolute inset-0 " />
    </div>

    {/* Text block is left-aligned, but not constraining the image */}
    <div className="relative max-w-2xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Welcome to My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          Blog
        </span>
      </h1>
      <p className="text-xl text-white/70 max-w-xl">
        Exploring the intersection of machine learning, web development, and technology. 
        Join me on this journey of discovery and innovation.
      </p>
    </div>
  </section>

  );
}
