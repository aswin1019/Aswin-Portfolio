import { motion } from "framer-motion";
import { Code2, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: ["Python", "C", "C++", "Java", "SQL"]
  },
  {
    title: "Generative AI / LLM",
    icon: <Brain size={20} />,
    skills: [
      "Large Language Models",
      "Prompt Engineering (few-shot, zero-shot, role prompting)",
      "OpenAI",
      "LangChain",
      "Hugging Face Transformers",
      "AI Agents",
      "Multi-Agent Workflows"
    ]
  },
  {
    title: "Tools / Frameworks",
    icon: <Wrench size={20} />,
    skills: [
      "Power BI",
      "Apache Superset",
      "MySQL",
      "Tableau",
      "Alteryx",
      "Katonic AI",
      "Excel",
      "Machine Learning",
      "Data Visualization",
      "Data Analysis",
      "PostgreSQL"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-indigo-700">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-600 text-white p-2 rounded-full shadow-md">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
