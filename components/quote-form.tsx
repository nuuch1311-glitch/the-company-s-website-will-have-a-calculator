"use client"

import { useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { dict } from "@/lib/content"

export function QuoteForm() {
  const { tr } = useLanguage()
  const q = dict.quote
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const inputClass =
    "w-full border border-[#d3d0ca] bg-white px-4 py-3 text-[14px] text-[#171717] outline-none transition-colors placeholder:text-[#9a968e] focus:border-[#b98935]"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    setFileName(null)
  }

  return (
    <section id="quote" className="mx-auto w-[min(1180px,calc(100%-48px))] py-24">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-[#b98935]">{q.eyebrow}</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05] text-[#171717]">
            {tr(q.titleA)} <em className="not-italic text-[#b98935]">{tr(q.titleEm)}</em>
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] leading-relaxed text-[#555]">{tr(q.lead)}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <input required name="name" placeholder={tr(q.name)} className={inputClass} />
          <input required name="phone" type="tel" placeholder={tr(q.phone)} className={inputClass} />
          <input name="email" type="email" placeholder={tr(q.email)} className={inputClass} />
          <select name="type" className={inputClass} defaultValue="">
            <option value="" disabled>
              {tr(q.typeLabel)}
            </option>
            {q.types.map((type) => (
              <option key={type.mn}>{tr(type)}</option>
            ))}
          </select>
          <input name="location" placeholder={tr(q.location)} className={inputClass} />
          <input name="area" placeholder={tr(q.area)} className={inputClass} />
          <textarea
            name="message"
            rows={4}
            placeholder={tr(q.message)}
            className={`${inputClass} sm:col-span-2`}
          />
          <label className="flex cursor-pointer items-center gap-2 border border-dashed border-[#c9c5bd] bg-white px-4 py-3 text-[13px] text-[#777] sm:col-span-2">
            <span className="text-[#b98935]">＋</span>
            <span>{fileName ?? tr(q.attach)}</span>
            <input
              ref={fileRef}
              type="file"
              hidden
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
          <button
            type="submit"
            className="bg-[#b98935] px-8 py-4 text-[12px] font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#a5772c] sm:col-span-2"
          >
            {tr(q.submit)}
          </button>
          {submitted && (
            <p className="text-[14px] font-semibold text-[#2c7a2c] sm:col-span-2" role="status">
              {tr(q.success)}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
