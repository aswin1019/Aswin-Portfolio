// src/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8 text-gray-700">
          I’d love to hear from you! Whether it’s about a role, collaboration, or just to say hi.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:aswinmangathil1999@gmail.com"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/aswin-m-53aa001a8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
