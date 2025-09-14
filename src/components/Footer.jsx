// src/components/Footer.jsx
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="mailto:aswinmangathil1999@gmail.com"
            className="p-2 rounded-full transition hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/30 hover:ring-2 hover:ring-teal-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aswin-m-53aa001a8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/30 hover:ring-2 hover:ring-teal-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/aswinmangathil1999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/30 hover:ring-2 hover:ring-teal-400"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Aswin M. Built with ❤️ using React & TailwindCSS.
        </p>
      </div>
    </footer>
  );
}
