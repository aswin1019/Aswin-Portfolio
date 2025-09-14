import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <div className="text-2xl font-heading font-bold text-teal-400">
          Aswin M
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className="relative text-gray-300 font-medium transition-colors duration-200"
            >
              {item.label}
              {/* underline animation */}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-400 text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-md">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ x: 4 }}
              className="block px-6 py-3 text-gray-300 font-medium hover:text-teal-400 transition"
              onClick={() => setOpen(false)} // close on click
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      )}
    </nav>
  );
}
