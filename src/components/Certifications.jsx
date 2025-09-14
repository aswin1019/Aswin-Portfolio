import { motion } from "framer-motion";
import { Award, GraduationCap, Laptop } from "lucide-react";

const certifications = [
  {
    category: "Professional Certifications",
    icon: <GraduationCap size={20} />,
    items: [
      { name: "PG Diploma in Data Science and AI", issuer: "Analytixlabs" },
      { name: "Katonic MLOps Certification", issuer: "Katonic AI" },
      { name: "Data Science 360 Course", issuer: "Analytixlabs" }
    ]
  },
  {
    category: "Online Courses",
    icon: <Laptop size={20} />,
    items: [
      { name: "Microsoft Power BI: PL-300 Certification Prep", issuer: "Udemy" },
      { name: "Python for Everybody", issuer: "Coursera" },
      { name: "Artificial Intelligence A-Z", issuer: "Udemy" },
      { name: "Complete Python Bootcamp from Zero to Hero in Python", issuer: "Udemy" }
    ]
  },
  {
    category: "Workshops",
    icon: <Award size={20} />,
    items: [
      {
        name: "Generative Adversarial Network (ATREYA'19)",
        issuer: "Organised by NIT"
      },
      {
        name: "Technical Workshop on 3D Game Augmented Reality (DYUKSHA'20)",
        issuer: "Robosol & IIT Bombay"
      }
    ]
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-indigo-700">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-600 text-white p-2 rounded-full shadow-md">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {cat.items.map((cert, i) => (
                  <li key={i}>
                    <p className="text-gray-800 font-medium">{cert.name}</p>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
