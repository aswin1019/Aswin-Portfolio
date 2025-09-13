// src/components/Education.jsx

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
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.duration}</p>
              {edu.grade && (
                <p className="text-gray-600 mt-2">{edu.grade}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
