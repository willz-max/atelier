import SectionHeader from "../SectionHeader"
import { Sparkles } from 'lucide-react'

const awards = [
  { title: "Best Residential Design", org: "ASID Design Excellence", year: "2025" },
  { title: "Hospitality Design Award", org: "HD Awards", year: "2025" },
  { title: "Innovation in Commercial Design", org: "IIDA", year: "2024" },
  { title: "Emerging Studio of the Year", org: "Architectural Digest", year: "2024" },
  { title: "Sustainable Design Leader", org: "USGBC", year: "2023" },
  { title: "Top 50 Interior Designers", org: "Luxe Interiors + Design", year: "2023" },
 
]

export default function Awards() {
    return (
      <section className="py-24 bg-zinc-50 text-zinc-900 dark:bg-[#020814] dark:text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader title="Awards & Accolades" subTitle="Recognition" para="Our commitment to design excellence has been recognized by the industry's most prestigious institutions." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {awards.map((award) => (
              <div
                key={award.title}
                className="group rounded-[1rem] border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-amber-500/30 dark:border-white/10 dark:bg-[#111827]"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded bg-amber-50 text-amber-700 flex items-center justify-center shadow-inner shadow-amber-500/10 dark:bg-amber-900/10 dark:text-amber-300">
                    <Sparkles size={20} />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className=" font-semibold text-zinc-900 dark:text-white">{award.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{award.org}</p>
                  </div>
                </div>
                <span className="mt-6 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-white/5 dark:text-zinc-300">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}