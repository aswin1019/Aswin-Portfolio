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
    <section id="education" className="py-24 px-6 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-14 text-teal-400">
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
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-teal-500/30 transition"
            >
              {/* Icon */}
              <div className="text-teal-400 text-4xl mb-3">🎓</div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-teal-400">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.duration}</p>
              {edu.grade && (
                <p className="mt-2 text-teal-300 font-medium">{edu.grade}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
