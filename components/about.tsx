"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, projects, FALLBACK_IMAGE } from "@/lib/content"
import { ImageWithFallback } from "@/components/image-with-fallback"

export function About() {
  const { tr } = useLanguage()
  const a = dict.about

  return (
    <section id="about" className="mx-auto w-[min(1180px,calc(100%-48px))] py-24">
      <div className="mb-10 text-[11px] font-semibold tracking-[0.22em] text-[#b0aca3]">01 — ABOUT</div>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] font-bold tracking-[0.22em] text-[#b98935]">{tr(a.eyebrow)}</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05] text-[#171717]">
            {tr(a.titleA)} <em className="not-italic text-[#b98935]">{tr(a.titleEm)}</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#555]">{tr(a.body)}</p>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {a.ticks.map((tick, i) => (
              <span key={i} className="flex items-center gap-2 text-[14px] font-semibold text-[#333]">
                <span className="text-[#b98935]">✓</span> {tr(tick)}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-block border-b border-[#b98935] pb-1 text-[13px] font-bold uppercase tracking-[0.1em] text-[#b98935]"
          >
            {tr(a.link)}
          </a>
        </div>

        <div className="relative">
          <ImageWithFallback
            src={projects[0].img}
            fallback={FALLBACK_IMAGE}
            alt={tr(a.titleEm)}
            className="h-[440px] w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 flex items-end gap-3 bg-[#181818] px-5 py-4 text-white">
            <strong className="font-display text-3xl text-[#d9aa4c]">01</strong>
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">{tr(a.caption)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
