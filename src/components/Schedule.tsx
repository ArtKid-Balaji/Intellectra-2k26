import { motion } from "motion/react";
import { Clock, Coffee, Trophy, Mic2, Flag, Notebook } from "lucide-react";

const schedule = [
  { time: "09:00 AM", event: "On Spot Registration", icon: Notebook},
  { time: "09:30 AM", event: "Inauguration Ceremony", icon: Clock },
  { time: "10:00 AM", event: "Refreshments and snacks", icon: Clock },
  { time: "10:30 AM", event: "Technical Events", icon: Clock },
  { time: "01:00 PM", event: "Lunch Break", icon: Clock },
  { time: "02:00 PM", event: "Non-Technical Events", icon: Clock },
  { time: "03:00 PM", event: "Prize Distribution", icon: Trophy },
];

export const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            EVENT <span className="text-neon-cyan">TIMELINE</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyber-dark border-2 border-neon-cyan shadow-[0_0_10px_#00f2ff] -translate-x-1/2 z-10 group-hover:scale-150 transition-transform" />

                {/* Content */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className={`glass-card p-6 rounded-2xl border-white/5 hover:border-neon-cyan/30 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <item.icon className="w-5 h-5 text-neon-cyan" />
                      <span className="text-neon-cyan font-mono text-sm tracking-widest">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.event}</h3>
                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
