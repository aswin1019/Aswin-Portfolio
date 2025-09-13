// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold"> Aswin M</h1>
      <p className="mt-4 text-xl md:text-2xl max-w-2xl">
        Data Analyst | ML Engineer | Generative AI Enthusiast
      </p>
      <a
        href="#skills"
        className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
}
