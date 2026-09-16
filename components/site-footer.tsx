"use client"

import { useLanguage } from "@/components/language-provider"
import { dict, nav, LOGO_SRC, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/content"

export function SiteFooter() {
  const { tr } = useLanguage()
  const f = dict.footer

  return (
    <footer className="bg-[#111] text-white/70">
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC || "/placeholder.svg"} alt="Төгс Тоногт лого" className="h-12 w-12 object-contain" />
          <span>
            <b className="block font-display text-[15px] tracking-[0.08em] text-white">ТӨГС ТОНОГТ</b>
            <small className="mt-1 block text-[7px] tracking-[0.12em] text-white/50">{tr(dict.brandTagline)}</small>
          </span>
        </div>

        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white">{tr(f.nav)}</h4>
          <div className="flex flex-col gap-2 text-[13px]">
            {nav.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#d9aa4c]">
                {tr(item.label)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white">{tr(f.contact)}</h4>
          <div className="flex flex-col gap-2 text-[13px]">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[#d9aa4c]">
              {PHONE_DISPLAY}
            </a>
            <span>Ulaanbaatar, Mongolia</span>
            <a href={`mailto:${EMAIL}`} className="hover:text-[#d9aa4c]">
              {EMAIL}
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white">{tr(f.servicesTitle)}</h4>
          <div className="flex flex-col gap-2 text-[13px]">
            {f.servicesList.map((item) => (
              <span key={item.mn}>{tr(item)}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))] py-6 text-center text-[12px] text-white/50">
          {tr(f.rights)}
        </div>
      </div>
    </footer>
  )
}
