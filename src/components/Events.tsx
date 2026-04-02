import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { X, Trophy, Users, Lightbulb, Code, Brain, Layout, Swords, Zap, Gamepad2 } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  rules: string[];
  coordinators: string[];
  icon: any;
  type: 'tech' | 'non-tech';
}

const events: Event[] = [
  {
    id: "prompt-stack",
    title: "PROMPT STACK",
    description: "Design and develop a creative website using modern tools and AI-driven prompts to showcase innovation and functionality.",
    rules: ["Duration: 2 Hours", "vibe coding", "AI integration required"],
    coordinators: ["SAKTHIMURUGAN V", "ADITHYA R", "AGNES JOERGIYA S", "JANNATHUL FIRDHOUSE K"],
    icon: Zap,
    type: 'tech'
  },
  {
    id: "codesmith",
    title: "CODESMITH",
    description: "Test your debugging and coding skills by identifying errors and crafting efficient solutions under pressure.",
    rules: [" No malpractice or copying", "Languages: Java, Python", "Duration: 2 Hours"],
    coordinators: ["DHAYANITHI S", "MOHANBABU E", "DIVYA R", "ARTHI S"],
    icon: Code,
    type: 'tech'
  },
  {
    id: "innovation-meet",
    title: "INNOVATION MEET",
    description: "Present your ideas, research, or projects and impress the judges with your innovation and presentation skills.",
    rules: ["Team of 3-4 members", "PPT should be submitted before event", "Presentation duration: 10 mins"],
    coordinators: ["BHARATH S", "LOGESH B", "ABINAYA A", "GOMATHI K"],
    icon: Lightbulb,
    type: 'tech'
  },
  {
    id: "infographix",
    title: "INFOGRAPHIX",
    description: "Create visually appealing posters to communicate ideas effectively through design, creativity, and clarity.",
    rules: ["Duration: 2 Hours", "Topic will be given on-spot", "Tool: Canva "],
    coordinators: ["PUGAZHENDHI S", "SAKTHIVEL B", "ANUSHA N", "PRAVEENA V"],
    icon: Layout,
    type: 'tech'
  },
  {
    id: "booyah-battle",
    title: "BOOYAH BATTLE",
    description: "Compete in an intense Free Fire tournament and prove your squad survival and combat skills.",
    rules: ["Team of 4 members", "Multiple rounds and playoffs", "Best squad tactics win"],
    coordinators: ["SUDHARSANAN K", "ANBAZHAGAN N", "SHANMUGA PRIYA V", "PRIYADHARSHINI R"],
    icon: Gamepad2,
    type: 'non-tech'
  },
  {
    id: "checkmate-clash",
    title: "CHECKMATE CLASH",
    description: "Challenge your opponents in a strategic chess battle and showcase your tactical thinking.",
    rules: ["Individual participation", "Knockout rounds", "Standard chess rules"],
    coordinators: ["SRIDHAR B", "SHARIC BASHA J", "HARSHAVARTHINI R", "DEVADHARSHINI A"],
    icon: Swords,
    type: 'non-tech'
  },
  {
    id: "neurolink",
    title: "NEUROLINK",
    description: "Test your logical thinking by connecting clues, patterns, and ideas in a fast-paced brain game.",
    rules: ["Individual", "Buzzer rounds", "Pattern and logic-based challenges"],
    coordinators: ["AVINESH KUMAR D", "HEMANANTH B V", "VARALAKSHMI G", "SHARMI M"],
    icon: Brain,
    type: 'non-tech'
  },
  {
    id: "auction-arena",
    title: "AUCTION ARENA",
    description: "Build your dream cricket team through strategic bidding and compete based on performance and decision-making.",
    rules: ["Team of 2-4 members", "Auction-based bidding system", "Limited teams only"],
    coordinators: ["SAMYNATHAN V", "JAYENTHIRAN M", "PUNNIYA JANANI B", "NARMADHA P"],
    icon: Trophy,
    type: 'non-tech'
  }
];

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
 <motion.div
  layoutId={event.id}
  onClick={() => setSelectedEvent(event)}
  whileHover={{ y: -10, scale: 1.02 }} 
  className="glass-card p-8 rounded-2xl cursor-pointer relative overflow-hidden"
>
  {/* Background Large Icon */}
  <div className="absolute top-0 right-0 p-4 opacity-20">
    <event.icon
      className="w-24 h-24 text-neon-cyan"
      style={{
        filter: "drop-shadow(0 0 25px #00ffff)"
      }}
    />
  </div>

  <div className="relative z-10">
    {/* Small Icon Box */}
    <div className="w-12 h-12 rounded-lg 
                    bg-neon-cyan/20 
                    flex items-center justify-center 
                    mb-6 
                    border border-neon-cyan/40
                    shadow-[0_0_20px_rgba(0,255,255,0.4)]">

      <event.icon
        className="w-6 h-6 text-neon-cyan"
        style={{
          filter: "drop-shadow(0 0 10px #00ffff)"
        }}
      />
    </div>

    <h3 className="text-2xl font-display font-bold text-white mb-3">
      {event.title}
    </h3>

    <div className="flex items-center text-xs font-mono tracking-widest text-neon-cyan uppercase">
      View Details →
    </div>
  </div>
</motion.div>
  );

  return (
    <section id="events" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            TECHNICAL <span className="text-neon-cyan">EVENTS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {events.filter(e => e.type === 'tech').map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            NON-TECHNICAL <span className="text-neon-cyan">EVENTS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.filter(e => e.type === 'non-tech').map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={selectedEvent.id}
              className="glass-card w-full max-w-2xl rounded-3xl overflow-hidden relative z-10"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20">
                    <selectedEvent.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white">{selectedEvent.title}</h3>
                    <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">
                      {selectedEvent.type === 'tech' ? 'Technical Event' : 'Non-Technical Event'}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-3">Description</h4>
                    <p className="text-slate-200 leading-relaxed">{selectedEvent.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-4">Event Rules</h4>
                    <ul className="space-y-3">
                      {selectedEvent.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_#00f2ff]" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-4">Coordinator</h4>
                    <ul className="space-y-3">
                      {selectedEvent.coordinators.map((coordinator, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_#00f2ff]" />
                          {coordinator}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <Trophy className="w-5 h-5" />
                      <span className="text-sm font-bold">Cash Prizes</span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedEvent(null);
                        document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-neon-cyan text-cyber-dark font-bold rounded-lg hover:shadow-[0_0_15px_#00f2ff] transition-all"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

