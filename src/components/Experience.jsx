import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analyst",
    company: "InvictIQ, London (Remote)",
    duration: "Sep 2022 – Dec 2023",
    details: [
      "Partnered with UK healthcare and care-home clients to deliver analytics solutions for compliance, patient outcomes, and resource management.",
      "Designed and maintained interactive dashboards (Power BI, Apache Superset) to track bed occupancy, staffing levels, and patient care metrics.",
      "Automated ETL pipelines with Python & SQL, cutting reporting turnaround by 35% and ensuring on-time compliance submissions.",
      "Built and deployed predictive ML models (Katonic MLOps) to forecast admissions and optimize staff allocation.",
      "Delivered ad-hoc analyses for the UK Health Department, supporting data-driven policy improvements.",
      "Developed AI-driven reporting tools using Generative AI (LangChain, OpenAI) for efficient querying and automated reporting."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-indigo-700">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-200 pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              {/* Role + Company */}
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-600 text-white p-2 rounded-full shadow-md">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-800">
                  {exp.role}
                </h3>
              </div>

              <p className="text-indigo-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm italic mb-4">{exp.duration}</p>

              {/* Bulleted details */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
