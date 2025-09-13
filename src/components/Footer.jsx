// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <p>
        © {new Date().getFullYear()} Aswin M. Built with ❤️ using React & TailwindCSS.
      </p>
    </footer>
  );
}
