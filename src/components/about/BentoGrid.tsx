import React from "react";

const card =
  "rounded-2xl bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";
const tileTitle = "text-purple-300 text-sm mb-2";
const tileHeading = "font-semibold text-[15px] md:text-base";
const statBox = `flex flex-col items-center justify-center ${card} p-4`;

export default function BentoGrid() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white p-4">
      {/* 12 × 8 grid (same unit system) */}
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-12 grid-rows-8 gap-4">
        {/* LEFT SIDEBAR (cols 1–2, rows 1–8) */}
        <div className={`col-span-2 row-span-8 ${card} p-4`}>
          <div className={tileTitle}>📚 My Stacks</div>
          <div className={tileHeading}>Tech Arsenal</div>

          <div className="space-y-3 mt-4 text-sm/relaxed text-zinc-300">
            <div className="flex items-center gap-3">
              <span>🔄</span> Webflow
            </div>
            <div className="flex items-center gap-3">
              <span>🎨</span> Figma
            </div>
            <div className="flex items-center gap-3">
              <span>📱</span> Framer
            </div>
            <div className="flex items-center gap-3">
              <span>⚡</span> Adobe XD
            </div>
          </div>

          {/* (Optional) mini gallery & services kept for sidebar rhythm */}
          <div className="mt-8">
            <div className={tileTitle}>📁 Projects</div>
            <div className={tileHeading}>Works Gallery</div>
            <div className="grid grid-cols-2 gap-2 mb-3 mt-3">
              <div className="bg-gradient-to-br from-indigo-500/70 to-purple-600/70 rounded-lg h-12" />
              <div className="bg-gradient-to-br from-fuchsia-500/70 to-purple-600/70 rounded-lg h-12" />
            </div>
            <button className="w-full rounded-lg py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors">
              View Works
            </button>
          </div>

          <div className="mt-8">
            <div className={tileTitle}>⚙️ Services</div>
            <div className={tileHeading}>Solutions Suite</div>
            <div className="text-xs space-y-2 mt-3 text-zinc-300">
              <div>📱 App Design</div>
              <div>💻 No Code development</div>
            </div>
            <button className="w-full rounded-lg py-2 text-xs font-medium bg-purple-600 hover:bg-purple-500 transition-colors mt-3">
              View All Services
            </button>
          </div>
        </div>

        {/* TOP ROW — STAT (cols 3–4, rows 1–2) */}

        <div className={`col-span-2 row-span-2 ${statBox}`}>
          <div className="text-4xl font-bold">01+</div>
          <div className="text-purple-300 text-sm mt-1">📁 Projects</div>
        </div>
        <div className={`col-span-2 row-span-2 ${statBox}`}>
          <div className="text-4xl font-bold">01+</div>
          <div className="text-purple-300 text-sm mt-1">😊 Happy Clients</div>
        </div>
        <div className={`col-span-2 row-span-2 ${statBox}`}>
          <div className="text-4xl font-bold">01+</div>
          <div className="text-purple-300 text-sm mt-1">⭐ Year Expertise</div>
        </div>

        {/* TOP ROW — ONLINE PRESENCE (fills to end: cols 5–12, rows 1–2) */}
        <div className={`col-span-4 row-span-2 ${card} p-4`}>
          <div className={tileTitle}>👋 Follow Me</div>
          <div className={tileHeading}>Online Presence</div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            {[
              { icon: "🐙", label: "github/username" },
              { icon: "🔗", label: "linkedin/username" },
              { icon: "💼", label: "portfolio.site" },
              { icon: "🌐", label: "personal.blog" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
              >
                <span>{s.icon}</span>
                <span className="truncate">{s.label}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <button className="rounded-lg px-4 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors">
              Email Me
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-medium bg-zinc-900/60 border border-white/10 hover:bg-zinc-800/60 transition-colors">
              Copy Address
            </button>
          </div>
        </div>

        {/* MIDDLE — MAIN PROFILE (cols 3–8, rows 3–6) */}
        <div className={`col-span-6 row-span-4 ${card} p-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs text-zinc-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                Available To Work
                <span className="text-[11px] bg-zinc-800/70 border border-white/10 px-2 py-0.5 rounded">
                  Resume
                </span>
              </div>
              <h2 className="text-xl font-bold">Sanjay Billa</h2>
              <p className="text-zinc-400">I&apos;m a Product Designer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span>📍</span> India
            </div>
            <div className="flex items-center gap-2">
              <span>🗣️</span> English &amp; Hindi
            </div>
            <div className="flex items-center gap-2">
              <span>💼</span> Product Designer
            </div>
            <div className="flex items-center gap-2">
              <span>🎓</span> Mumbai University
            </div>
            <div className="flex items-center gap-2">
              <span>💡</span> IoT
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span>📷</span> DM me (Instagram)
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span> WhatsApp Me
            </div>
          </div>
        </div>

        {/* MIDDLE RIGHT — LARGE WORK GALLERY (cols 9–12, rows 3–6) */}
        <div className={`col-span-4 row-span-4 ${card} p-6`}>
          <div className={tileTitle}>📁 Projects</div>
          <div className={tileHeading}>Works Gallery</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-500/60 to-purple-600/60" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-500/60 to-purple-600/60" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan-500/50 to-indigo-600/60" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-violet-500/50 to-fuchsia-600/60" />
          </div>
          <button className="mt-4 w-full rounded-lg py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors">
            View All Projects
          </button>
        </div>

        {/* BOTTOM LEFT — CLIENTS (cols 3–8, rows 7–8) */}
        <div className={`col-span-6 row-span-2 ${card} p-4`}>
          <div className={tileTitle}>👥 My Clients</div>
          <div className={tileHeading}>Satisfied Partners</div>
          <div className="flex items-center justify-between mt-4 text-zinc-400 text-sm">
            <div>TikTok</div>
            <div>Spotify</div>
            <div>Facebook</div>
            <div>YouTube</div>
            <div>Instagram</div>
            <div>Snapchat</div>
            <div>Dribbble</div>
          </div>
        </div>

        {/* BOTTOM RIGHT — CONTACT / CTA (cols 9–12, rows 7–8) */}
        <div className="col-span-4 row-span-2 rounded-2xl p-6 border border-purple-500/40 bg-gradient-to-br from-purple-600/30 to-indigo-600/30">
          <div className="text-center">
            <div className="text-2xl mb-2">👑</div>
            <h3 className="font-bold text-lg mb-1">Let&apos;s Work Together</h3>
            <p className="text-sm mb-4 text-zinc-200/80">
              Let&apos;s make something great.
            </p>
            <div className="space-y-2">
              <button className="w-full rounded-lg py-2 text-sm font-medium bg-white text-purple-800">
                📧 Email Me
              </button>
              <button className="w-full rounded-lg py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors">
                📅 Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
