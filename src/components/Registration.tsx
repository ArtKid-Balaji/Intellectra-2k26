import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export const Registration = () => {
  return (
    <section id="registration" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[40px] text-center border-neon-cyan/20 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 glass-card rounded-full border-neon-cyan/30">
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-[0.3em]">Secure Portal</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            JOIN THE <span className="text-neon-cyan">FUTURE</span>
          </h2>
          
          <p className="text-white text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Click below to complete registration with Google Form. 
            Ensure all details are accurate for certificate generation.
          </p>

          <motion.a
            href="https://forms.gle/eeYDXeE965PFoM2t8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-neon-cyan text-cyber-dark font-bold text-xl rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] transition-all relative group"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Register via Google Form
            <ExternalLink className="w-6 h-6" />
          </motion.a>

          <div className="mt-12 flex flex-wrap justify-center gap-8 ">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500"
                style={{
                  boxShadow: "0 0 8px rgba(34, 197, 94, 0.4), 0 0 16px rgba(34, 197, 94, 0.2)"
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-s text-white font-mono uppercase tracking-widest">Registration Open</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500"
                style={{
                  boxShadow: "0 0 8px rgba(239, 68, 68, 0.4), 0 0 16px rgba(239, 68, 68, 0.2)"
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-s font-mono uppercase tracking-widest">Limited Slots Only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
