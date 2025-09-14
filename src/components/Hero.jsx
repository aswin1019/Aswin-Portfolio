// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          <span className="text-teal-400">Aswin M</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Data Analyst with expertise in{" "}
          <span className="text-teal-400 font-medium">Data Science</span>,{" "}
          <span className="text-teal-400 font-medium">Generative AI</span>, and{" "}
          <span className="text-teal-400 font-medium">Data Visualization</span>.
          Experienced in building{" "}
          <span className="font-medium">interactive dashboards</span>,{" "}
          <span className="font-medium">scalable ETL pipelines</span>, and{" "}
          <span className="font-medium">AI-powered solutions</span> that deliver
          actionable insights and support business growth.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-teal-400 text-teal-400 font-medium rounded-lg hover:bg-teal-400 hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
