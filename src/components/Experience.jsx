// src/components/Experience.jsx

const experiences = [
  {
    role: "Data Analyst",
    company: "InvictIQ, London (Remote)",
    duration: "Sep 2022 – Dec 2023",
    details: [
      "Designed interactive dashboards using Apache Superset & Power BI for real-time KPIs across business verticals.",
      "Built and optimized Python-based web scraping tools (BeautifulSoup, Selenium, Scrapy) → boosted data collection from monthly to daily.",
      "Developed end-to-end ETL pipelines with Pandas, NumPy & SQL, cutting manual processing by 35%.",
      "Automated workflows using Apache Airflow for timely data delivery.",
      "Deployed & monitored ML models with Katonic MLOps Platform.",
      "Explored Generative AI (OpenAI, LangChain) for multi-agent workflows and prompt engineering optimization."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-700">{exp.role}</h3>
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>

              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
