"use client"

import { useLanguage } from "@/components/language-provider"
import { dict } from "@/lib/content"

export function Hero() {
  const { tr } = useLanguage()
  const h = dict.hero

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-113px)] items-center overflow-hidden bg-[#222] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0.6) 40%, rgba(17,17,17,0.1)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="relative mx-auto w-[min(1180px,calc(100%-48px))] py-24">
        <p className="mb-5 text-[11px] font-bold tracking-[0.28em] text-[#d9aa4c]">{h.eyebrow}</p>
        <h1 className="max-w-[900px] font-display text-[clamp(43px,7vw,80px)] font-bold leading-[0.98] tracking-[-0.01em]">
          {tr(h.titleA)} <em className="not-italic text-[#d9aa4c]">{tr(h.titleEm)}</em> {tr(h.titleB)}
        </h1>
        <p className="mt-7 text-[clamp(17px,2vw,22px)] font-semibold text-white/90">{tr(h.lead)}</p>
        <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/70">{tr(h.copy)}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#quote"
            className="bg-[#d9aa4c] px-8 py-4 text-[12px] font-bold tracking-[0.1em] text-[#111] transition-colors hover:bg-[#c99a3d]"
          >
            {tr(h.quote)}
          </a>
          <a
            href="#projects"
            className="border border-white/40 px-8 py-4 text-[12px] font-bold tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111]"
          >
            {tr(h.projects)}
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 hidden items-center gap-2 text-[10px] tracking-[0.2em] text-white/60 md:flex">
        {dict.scroll} <span className="animate-bounce">↓</span>
      </div>
    </section>
  )
}
