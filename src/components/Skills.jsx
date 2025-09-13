// src/components/Skills.jsx

const skills = [
  "Python", "SQL", "Power BI", "Apache Superset", "Tableau", "Alteryx",
  "Machine Learning", "Data Visualization", "Generative AI", "LangChain",
  "Airflow", "Katonic MLOps", "Java", "C++", "React", "TailwindCSS"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm md:text-base font-medium shadow hover:bg-indigo-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
