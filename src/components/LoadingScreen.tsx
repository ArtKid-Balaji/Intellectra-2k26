import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-cyber-dark flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    ><p className="mt-4 font-light text-xs sm:text-sm 
              text-neon-cyan/70 tracking-wider 
              uppercase text-center px-6">
  Department of Information Technology Presents
</p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white glow-text">
          INTELLECTRA <span className="text-neon-cyan">2K26</span>
        </h1>
      </motion.div>
      
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-neon-cyan shadow-[0_0_10px_#00f2ff]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 font-mono text-xs text-neon-cyan/60 tracking-widest uppercase">
        Initializing Neural Interface... {progress}%
      </p>
    </motion.div>
  );
};
