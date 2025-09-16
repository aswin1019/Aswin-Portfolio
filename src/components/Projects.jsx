// src/components/Projects.jsx
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const projects = [
  {
    title: "Generative BI Assistant",
    date: "2025",
    description:
      "Developed an AI-powered BI Assistant using Streamlit and Groq LLaMA models. Enabled users to query data in natural language and get instant insights with charts. Supported CSV/Excel uploads, automated data cleaning, query history, and downloadable reports. Delivered interactive visualizations (bar, line, heatmap, etc.) for business decision-making.",
    tech: ["Streamlit", "Groq LLaMA", "Python", "Pandas", "DataViz"],
    link: "https://genai-bi-assistant.streamlit.app" // 🔗 Only this project has a link
  },
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
    <section id="projects" className="py-20 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-teal-400">
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
              className="group bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-500 text-white p-2 rounded-full shadow-md">
                  <Code size={18} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white">
                  {proj.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm italic mb-3">{proj.date}</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-100/10 text-teal-400 text-xs font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Show demo link only if available */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-teal-400 font-medium hover:underline"
                >
                  View Demo →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
