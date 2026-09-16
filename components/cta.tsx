"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, PHONE_TEL } from "@/lib/content"

export function Cta() {
  const { tr } = useLanguage()
  const c = dict.cta

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#b98935] py-24 text-[#1a1408]"
    >
      <div className="mx-auto w-[min(900px,calc(100%-48px))] text-center">
        <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-[#4a3a12]">{c.eyebrow}</p>
        <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.08]">
          {tr(c.titleA)} <em className="not-italic underline decoration-[#1a1408]/30 underline-offset-4">{tr(c.titleEm)}</em>{" "}
          {tr(c.titleB)}
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-relaxed text-[#3a2f12]">{tr(c.body)}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#quote"
            className="bg-[#181818] px-8 py-4 text-[12px] font-bold tracking-[0.1em] text-white transition-colors hover:bg-black"
          >
            {tr(c.quote)}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="border border-[#1a1408]/50 px-8 py-4 text-[12px] font-bold tracking-[0.1em] text-[#1a1408] transition-colors hover:bg-[#1a1408] hover:text-white"
          >
            {tr(c.call)}
          </a>
        </div>
      </div>
    </section>
  )
}
