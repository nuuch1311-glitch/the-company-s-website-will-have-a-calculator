"use client"

import { useLanguage } from "@/components/language-provider"
import { stats } from "@/lib/content"

export function Stats() {
  const { tr } = useLanguage()

  return (
    <section className="mx-auto w-[min(1180px,calc(100%-48px))] py-20">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`px-2 ${i > 0 ? "sm:border-l sm:border-[#dedcd7] sm:pl-8" : ""}`}
          >
            <strong className="font-display text-[clamp(40px,5vw,56px)] font-bold text-[#171717]">
              {stat.value}
            </strong>
            <p className="mt-2 text-[13px] font-medium text-[#777]">{tr(stat.label)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
