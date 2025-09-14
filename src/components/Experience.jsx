// src/components/Experience.jsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    company: "InvictIQ, London (Remote)",
    duration: "Sep 2022 – Dec 2023",
    details: [
      "Designed interactive dashboards using Apache Superset & Power BI for real-time KPIs across business verticals.",
      "Built and optimized Python-based web scraping tools (BeautifulSoup, Selenium, Scrapy).",
      "Developed ETL pipelines with Pandas, NumPy & SQL, cutting manual processing by 35%.",
      "Automated workflows using Apache Airflow for timely data delivery.",
      "Deployed & monitored ML models with Katonic MLOps Platform.",
      "Explored Generative AI (OpenAI, LangChain) for multi-agent workflows and prompt optimization."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-teal-400">
          Experience
        </h2>

        <div className="relative border-l-2 border-teal-500">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-12 ml-6 ${index % 2 === 0 ? "md:ml-12" : "md:ml-12 md:mr-12"}`}
            >
              {/* Dot icon */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full shadow-md">
                <Briefcase size={14} className="text-white" />
              </span>

              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/30 transition">
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-teal-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
