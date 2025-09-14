export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-6 text-teal-400">
          Contact Me
        </h2>
        <p className="text-lg mb-8 text-gray-400">
          I’d love to hear from you! Whether it’s about a role, collaboration, or just to say hi.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:aswinmangathil1999@gmail.com"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 hover:shadow-teal-500/40 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/aswin-m-53aa001a8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-blue-500/40 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
