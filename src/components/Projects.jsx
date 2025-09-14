import { motion } from "framer-motion";
import { Code } from "lucide-react";

const projects = [
  {
    title: "Healthcare KPI Dashboard",
    date: "2023",
    description:
      "Built a real-time Power BI dashboard for UK healthcare clients to monitor bed occupancy, staffing levels, and patient care metrics. Improved decision-making and compliance reporting.",
    tech: ["Power BI", "SQL", "Python"]
  },
  {
    title: "Staffing Trends & Predictive Analysis",
    date: "2023",
    description:
      "Analyzed staffing patterns in care homes using Python and SQL. Developed ML models to forecast demand, helping optimize workforce planning and reduce shortages.",
    tech: ["Python", "Scikit-learn", "Pandas", "SQL"]
  },
  {
    title: "Generative AI Workflows",
    date: "2023",
    description:
      "Experimented with OpenAI + LangChain to build multi-agent workflows. Automated reporting, query answering, and improved healthcare data insights via AI-powered assistants.",
    tech: ["LangChain", "OpenAI", "Python"]
  },
  {
    title: "Price Foreteller for Pre-owned Cars",
    date: "2021",
    description:
      "Built a gradient boosting regression model to predict used car prices with ~80% accuracy. Collected data from multiple sources, applied feature engineering, and deployed via Flask API on Heroku.",
    tech: ["Python", "Flask", "Heroku", "ML"]
  },
  {
    title: "Automated Vehicle Accident Detection",
    date: "2019",
    description:
      "Arduino-based system integrating GPS & GSM modules to send real-time alerts during accidents. Used accelerometer sensors to detect sudden speed changes and trigger emergency notifications.",
    tech: ["Arduino", "GSM", "IoT"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-indigo-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-600 text-white p-2 rounded-full shadow-md">
                  <Code size={18} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-800">
                  {proj.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm italic mb-3">{proj.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Future GitHub/demo link */}
              {/* <a
                href="https://github.com/aswin/project-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                View Code →
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

