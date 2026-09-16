"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { dict, projects, categories, FALLBACK_IMAGE, type Project } from "@/lib/content"
import { ImageWithFallback } from "@/components/image-with-fallback"

export function Projects() {
  const { lang, tr } = useLanguage()
  const p = dict.projectsSection
  const [selected, setSelected] = useState(0) // index into categories, 0 = ALL
  const [active, setActive] = useState<Project | null>(null)

  const selectedCat = categories[selected]
  const filtered =
    selected === 0 ? projects : projects.filter((project) => project.cat.mn === selectedCat.mn)

  return (
    <section id="projects" className="mx-auto w-[min(1180px,calc(100%-48px))] py-24">
      <div className="mb-10 text-[11px] font-semibold tracking-[0.22em] text-[#b0aca3]">03 — SELECTED WORK</div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-[#b98935]">{p.eyebrow}</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.05] text-[#171717]">
            {tr(p.titleA)} <em className="not-italic text-[#b98935]">{tr(p.titleEm)}</em>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.mn}
              onClick={() => setSelected(i)}
              className={`border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
                selected === i
                  ? "border-[#b98935] bg-[#b98935] text-white"
                  : "border-[#d3d0ca] text-[#555] hover:border-[#b98935] hover:text-[#b98935]"
              }`}
            >
              {tr(cat)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <button
            key={project.title.mn}
            onClick={() => setActive(project)}
            className="group relative block overflow-hidden text-left"
          >
            <ImageWithFallback
              src={project.img}
              fallback={FALLBACK_IMAGE}
              alt={tr(project.title)}
              className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <small className="text-[10px] font-bold tracking-[0.15em] text-[#d9aa4c]">
                {tr(project.cat)} / {project.year}
              </small>
              <h3 className="mt-1 font-display text-[17px] font-bold">{tr(project.title)}</h3>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[640px] overflow-auto bg-[#f4f3f0]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center bg-white/90 text-[#171717]"
            >
              <X size={18} />
            </button>
            <ImageWithFallback
              src={active.img}
              fallback={FALLBACK_IMAGE}
              alt={tr(active.title)}
              className="h-[320px] w-full object-cover"
            />
            <div className="p-7">
              <small className="text-[11px] font-bold tracking-[0.12em] text-[#b98935]">
                {tr(active.cat)} / {active.year} · {tr(active.loc)}
              </small>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#171717]">{tr(active.title)}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[#555]">{tr(active.desc)}</p>
            </div>
          </div>
        </div>
      )}
      {/* keep lang referenced for re-render on language change */}
      <span className="sr-only">{lang}</span>
    </section>
  )
}
