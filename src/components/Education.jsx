// src/components/Education.jsx
import { motion } from "framer-motion";

const education = [
  {
    degree: "PG Diploma in Data Science and AI",
    institution: "Analytixlabs",
    duration: "Apr 2024 – Nov 2024"
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "NSS College of Engineering, Palakkad",
    duration: "2017 – 2021",
    grade: "CGPA: 7.1/10"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 text-indigo-700">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4 hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="text-indigo-600 text-4xl">🎓</div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
                {edu.grade && (
                  <p className="mt-2 text-pink-500 font-medium">{edu.grade}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

