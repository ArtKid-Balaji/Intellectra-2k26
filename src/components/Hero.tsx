import { motion } from "motion/react";
import { ChevronRight, Cpu } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-5xl"
      >
        <div className="w-full flex justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 
               rounded-full glass-card border-neon-cyan/20 mb-5"
  >
    <Cpu className="w-4 h-4 text-neon-cyan animate-pulse" />
    <span className="text-xs font-mono tracking-wide text-neon-cyan uppercase text-center">
      Department of Information Technology Presents
    </span>
  </motion.div>
</div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 leading-none">
          INTELLECTRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue glow-text">
            2K26
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
           className="text-6xl md:text-8xl lg:text-2xl font-display font-bold tracking-tighter text-white mb-6 leading-none">
          “ Welcome to the Grand Arena of Innovation ”
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('registration')}
            className="px-8 py-4 bg-neon-cyan text-cyber-dark font-bold rounded-lg flex items-center gap-2 group transition-all"
          >
             Register Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('events')}
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg flex items-center gap-2 hover:border-neon-cyan/50 transition-all"
          >
             Explore Events
          </motion.button>
        </div>

        <CountdownTimer />
      </motion.div>

    </section>
  );
};
