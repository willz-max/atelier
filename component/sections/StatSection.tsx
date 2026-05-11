import CompanyStats from "../CompanyStats";


export default function StatSection() {
    return(
      <section className="py-24 border-b border-zinc-200/10 bg-zinc-50 text-zinc-900 dark:bg-[#020814] dark:text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-4 flex-wrap justify-around mt-10">
          <CompanyStats title="Projects completed" stat={47} />
          <CompanyStats title="Years Experience" stat={15} />
          <CompanyStats title="Design Awards" stat={12} />
          <CompanyStats title="Happy Clients" stat={120} />
        </div>
      </section>
    )
}