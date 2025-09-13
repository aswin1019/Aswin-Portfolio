// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
