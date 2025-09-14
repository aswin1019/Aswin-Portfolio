// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-3xl">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          <span className="text-teal-400">Aswin M</span>
        </h1>

        {/* Animated Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
          <span className="text-teal-400">
            <Typewriter
              words={["Data Analyst"]}
              loop={false}
              cursor={false}   // 🔹 no blinking cursor
              typeSpeed={70}
              deleteSpeed={0}
            />
          </span>
        </h2>

        {/* Summary */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Data Analyst with expertise in Data Science, Generative AI, and Data
          Visualization. Experienced in building interactive dashboards,
          scalable ETL pipelines, and AI-powered solutions that deliver
          actionable insights and support business growth.
        </p>

        {/* Buttons */}
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
      </div>
    </section>
  );
}
