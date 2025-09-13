import { allPosts } from "contentlayer/generated";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const items = allPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${site}${p.url}</link>
        <guid>${site}${p.url}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description><![CDATA[${p.description}]]></description>
      </item>
    `)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog</title>
      <link>${site}/blog</link>
      <description>Latest posts</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

