// src/components/Certifications.jsx

const certifications = [
  {
    title: "PG Diploma in Data Science and AI",
    provider: "Analytixlabs",
    date: "Apr 2024 – Nov 2024"
  },
  {
    title: "Microsoft Power BI: PL-300 Certification Prep",
    provider: "Udemy",
    date: "2025"
  },
  {
    title: "Python for Everybody",
    provider: "Coursera",
    date: "2023"
  },
  {
    title: "Artificial Intelligence A-Z",
    provider: "Udemy",
    date: "2023"
  },
  {
    title: "Complete Python Bootcamp from Zero to Hero",
    provider: "Udemy",
    date: "2022"
  },
  {
    title: "Katonic MLOps Certification",
    provider: "Katonic",
    date: "2022"
  },
  {
    title: "Generative Adversarial Network Workshop (ATREYA’19)",
    provider: "NIT",
    date: "2019"
  },
  {
    title: "Technical Workshop on 3D Game Augmented Reality",
    provider: "DYUKSHA’20 in association with IIT Bombay",
    date: "2020"
  },
  {
    title: "Data Science 360 Course",
    provider: "Analytixlabs",
    date: "2021"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{cert.title}</h3>
              <p className="text-gray-700">{cert.provider}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
