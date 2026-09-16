"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, timeline } from "@/lib/content"

export function Process() {
  const { tr } = useLanguage()
  const pr = dict.process

  return (
    <section className="bg-[#181818] py-24 text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <div className="mb-10 text-[11px] font-semibold tracking-[0.22em] text-white/40">05 — HOW WE WORK</div>
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-[#d9aa4c]">{pr.eyebrow}</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05]">
            {tr(pr.titleA)} <em className="not-italic text-[#d9aa4c]">{tr(pr.titleEm)}</em>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((step) => (
            <article key={step.no} className="border-t border-white/15 pt-5">
              <b className="font-display text-[28px] text-[#d9aa4c]">{step.no}</b>
              <h3 className="mt-3 font-display text-[16px] font-bold">{tr(step.title)}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">{tr(step.desc)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
