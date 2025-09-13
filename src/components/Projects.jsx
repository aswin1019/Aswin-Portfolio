// src/components/Projects.jsx

const projects = [
  {
    title: "Price Foreteller for Pre-owned Cars",
    date: "Jun 2021",
    description:
      "Built a gradient boosting regression model to predict used car prices with 80% accuracy. Collected data from multiple sources, applied preprocessing & feature engineering, and deployed via Flask API on Heroku for real-time predictions."
  },
  {
    title: "Automated Vehicle Accident Detection",
    date: "Nov 2019",
    description:
      "Developed an Arduino-based system integrating GPS & GSM modules to send real-time alerts during accidents. Used an accelerometer sensor to detect sudden speed changes and trigger emergency notifications."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{proj.title}</h3>
              <p className="text-gray-500 text-sm">{proj.date}</p>
              <p className="mt-3 text-gray-700">{proj.description}</p>
              {/* Placeholder for future GitHub/demo links */}
              {/* <a href="https://github.com/aswin/project-link" className="mt-4 inline-block text-indigo-600 hover:underline">View Code</a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
