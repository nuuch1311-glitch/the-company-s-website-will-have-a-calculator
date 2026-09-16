"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, features } from "@/lib/content"

export function Why() {
  const { tr } = useLanguage()
  const w = dict.why

  return (
    <section className="mx-auto w-[min(1180px,calc(100%-48px))] py-24">
      <div className="mb-10 text-[11px] font-semibold tracking-[0.22em] text-[#b0aca3]">04 — THE DIFFERENCE</div>
      <div className="mb-12">
        <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-[#b98935]">{w.eyebrow}</p>
        <h2 id="why" className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05] text-[#171717]">
          {tr(w.titleA)} <em className="not-italic text-[#b98935]">{tr(w.titleEm)}</em>
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden border border-[#e2e0db] bg-[#e2e0db] sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title.mn} className="bg-[#f4f3f0] p-8">
            <span className="text-2xl text-[#b98935]">{feature.icon}</span>
            <h3 className="mt-4 font-display text-[16px] font-bold text-[#171717]">{tr(feature.title)}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#555]">{tr(feature.desc)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
