"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, services } from "@/lib/content"

export function Services() {
  const { tr } = useLanguage()
  const s = dict.services

  return (
    <section id="services" className="bg-[#181818] py-24 text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
        <div className="mb-10 text-[11px] font-semibold tracking-[0.22em] text-white/40">02 — SERVICES</div>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-[#d9aa4c]">{s.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05]">
              {tr(s.titleA)} <em className="not-italic text-[#d9aa4c]">{tr(s.titleEm)}</em>
            </h2>
          </div>
          <p className="max-w-[360px] text-[14px] leading-relaxed text-white/60">{tr(s.lead)}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.no} className="group bg-[#181818] p-8 transition-colors hover:bg-[#20201d]">
              <span className="font-display text-[13px] text-[#d9aa4c]">{service.no}</span>
              <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-white">
                {tr(service.title)}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">{tr(service.desc)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
