import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-13T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center 
                  glass-card rounded-xl py-6 
                  min-h-[110px] w-full">
    <span className="text-3xl sm:text-4xl md:text-5xl 
                     font-display font-bold text-neon-cyan">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs uppercase tracking-widest 
                     text-slate-400 mt-2">
      {label}
    </span>
  </div>
);

 return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="w-full flex flex-col items-center mt-14 px-4"
  >
    {/* Event Date */}
    <p className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white mb-6">
  14 <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
    March 2026
  </span> 
  </p>
  {/* end of date */}
    <p className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white mb-6">
Online Registration Closes In
</p>

    {/* Countdown Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl w-full">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  </motion.div>
);
};