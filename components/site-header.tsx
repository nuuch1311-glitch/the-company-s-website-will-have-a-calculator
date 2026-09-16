"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { dict, nav, LOGO_SRC, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content"

export function SiteHeader() {
  const { lang, setLang, tr } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-[#111] text-[11px] tracking-[0.08em] text-[#999]">
        <div className="mx-auto flex w-[min(1180px,calc(100%-48px))] items-center justify-between py-[9px]">
          <span>{tr(dict.topLocation)}</span>
          <a href={`tel:${PHONE_TEL}`} className="text-[#d9aa4c]">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-[#dedcd7] bg-[#f4f3f0]/80 backdrop-blur-md">
        <div className="mx-auto flex h-[82px] w-[min(1180px,calc(100%-48px))] items-center justify-between">
          <a href="#home" aria-label="Төгс Тоногт home" className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_SRC || "/placeholder.svg"}
              alt="Төгс Тоногт лого"
              className="h-12 w-12 object-contain"
            />
            <span>
              <b className="block font-display text-[15px] tracking-[0.08em] text-[#171717]">ТӨГС ТОНОГТ</b>
              <small className="mt-[3px] block text-[7px] tracking-[0.12em] text-[#777]">
                {tr(dict.brandTagline)}
              </small>
            </span>
          </a>

          <button
            className="text-[#171717] md:hidden"
            aria-label="Цэс нээх"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#171717] transition-colors hover:text-[#b98935]"
              >
                {tr(item.label)}
              </a>
            ))}
            <div className="ml-[5px] flex items-center gap-[6px]">
              <button
                onClick={() => setLang("mn")}
                className={lang === "mn" ? "font-extrabold text-[#b98935]" : "text-[#999]"}
              >
                MN
              </button>
              <i className="not-italic text-[#ccc]">|</i>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "font-extrabold text-[#b98935]" : "text-[#999]"}
              >
                EN
              </button>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="bg-[#181818] px-[15px] py-3 text-white">
              9609 2515
            </a>
          </nav>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-[#dedcd7] bg-[#f4f3f0] px-6 py-5 text-[13px] font-bold uppercase shadow-md md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#171717] hover:text-[#b98935]"
              >
                {tr(item.label)}
              </a>
            ))}
            <div className="flex items-center gap-[6px]">
              <button
                onClick={() => setLang("mn")}
                className={lang === "mn" ? "font-extrabold text-[#b98935]" : "text-[#999]"}
              >
                MN
              </button>
              <i className="not-italic text-[#ccc]">|</i>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "font-extrabold text-[#b98935]" : "text-[#999]"}
              >
                EN
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
