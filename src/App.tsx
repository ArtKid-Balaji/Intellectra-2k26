import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Schedule } from "./components/Schedule";
import { Registration } from "./components/Registration";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { LoadingScreen } from "./components/LoadingScreen";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ParticleBackground />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Events />
            <Schedule />
            <Registration />
            <Contact />
          </main>

          <Footer />

          {/* Chatbot */}
          <Chatbot />

          {/* Mouse Glow Effect */}
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <MouseGlow />
          </div>
        </motion.div>
      )}
    </div>
  );
}

function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[100px] absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
      style={{ left: mousePos.x, top: mousePos.y }}
    />
  );
};