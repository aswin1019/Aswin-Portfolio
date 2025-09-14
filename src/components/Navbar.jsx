// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero"); // default to hero

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = ["#hero", ...navItems.map((item) => item.href)];
    const elements = sections.map((id) => document.querySelector(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    elements.forEach((el) => el && observer.observe(el));
    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <div className="text-2xl font-heading font-bold text-teal-400">
          Aswin M
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`relative px-3 py-1 rounded-md font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-300 hover:text-teal-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-md bg-teal-500/80 shadow-[0_0_12px_rgba(45,212,191,0.6)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-400 text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ x: 4 }}
                className={`relative block px-6 py-3 rounded-md font-medium transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-teal-400"
                }`}
                onClick={() => setOpen(false)}
              >
                {isActive && (
                  <motion.div
                    layoutId="navHighlightMobile"
                    className="absolute inset-0 rounded-md bg-teal-500/80 shadow-[0_0_12px_rgba(45,212,191,0.6)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </motion.a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
