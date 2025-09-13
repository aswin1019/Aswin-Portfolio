// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Certifications", href: "#certifications" }
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-indigo-600">Aswin M</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block p-4 text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
