import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Why } from "@/components/why"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { Cta } from "@/components/cta"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f4f3f0] text-[#171717]">
        <SiteHeader />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Why />
          <Process />
          <Stats />
          <Cta />
          <QuoteForm />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
