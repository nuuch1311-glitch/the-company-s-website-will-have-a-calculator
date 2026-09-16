"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Lang } from "@/lib/content"

type BiText = { mn: string; en: string }

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  tr: (value: BiText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mn")

  useEffect(() => {
    const stored = localStorage.getItem("siteLanguage") as Lang | null
    if (stored === "mn" || stored === "en") {
      setLangState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem("siteLanguage", next)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  const tr = (value: BiText) => (lang === "mn" ? value.mn : value.en)

  return <LanguageContext.Provider value={{ lang, setLang, tr }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
