import { motion } from "motion/react";
import { Shield, Zap, Globe, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Cash Prizes",
      desc: "Exciting rewards for well performing teams",
    },
    {
      icon: Shield,
      title: "Certificate of Recognition",
      desc: "Official recognition for winners and achievers",
    },
    {
      icon: Award,
      title: "E-Certificates for Participation",
      desc: "Verified digital certificates for all participants",
    },
    {
      icon: Globe,
      title: "Elite Networking",
      desc: "Collaborate with innovators, coders & creators",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* ===== TOP ABOUT SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              ABOUT <span className="text-neon-cyan">INTELLECTRA</span>
            </h2>

            <p className="text-white text-lg leading-relaxed mb-6">
              INTELLECTRA 2K26 is the National-level Technical Symposium 
              organized by the Department of Information Technology at 
              Adhiparasakthi Engineering College.
            </p>

            <p className="text-white text-lg leading-relaxed mb-8">
              Our mission is to Cultivate a Prestigious Forum where the Brightest minds converge to tackle real-world challenges through Technology, Creativity, and Collaborative excellence.
            </p>

            {/* STATS */}
            <div className="flex gap-10">
              <div>
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-xs text-neon-cyan uppercase tracking-widest">
                  Colleges
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100+</h4>
                <p className="text-xs text-neon-cyan uppercase tracking-widest">
                  Participants
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">5+</h4>
                <p className="text-xs text-neon-cyan uppercase tracking-widest">
                  Events
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-neon-cyan/20 rounded-[40px] blur-2xl -z-10" />
            <img 
              src="src/assets/INTELLECTRA 2K26.jpg"
              alt="Symposium" 
              className="rounded-[32px] border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>

        {/* ===== HIGHLIGHT CARDS (FIXED ALIGNMENT) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
             className="p-8 rounded-3xl 
           bg-white/5 
           border border-neon-cyan/40
           backdrop-blur-xl
           text-center
           flex flex-col items-center
           transition-all duration-300
           shadow-[0_0_40px_rgba(0,255,255,0.2),0_0_80px_rgba(0,150,255,0.15)]"
            >
              <item.icon
  className="w-12 h-12 text-neon-cyan mb-6
             drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]
             drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
/>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 
                             text-transparent bg-clip-text 
                             bg-gradient-to-r 
                             from-neon-cyan via-blue-400 to-neon-blue">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};