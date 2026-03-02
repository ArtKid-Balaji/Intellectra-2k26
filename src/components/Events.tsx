import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { X, Trophy, Users, Lightbulb, Code, Brain, Layout, Target } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  rules: string[];
  icon: any;
  type: 'tech' | 'non-tech';
}

const events: Event[] = [
  {
    id: "codesmith",
    title: "CODESMITH",
    description: "The ultimate coding challenge to test your algorithmic prowess and speed.",
    rules: ["Individual participation", "Languages: C, C++, Java, Python", "Duration: 2 Hours"],
    icon: Code,
    type: 'tech'
  },
  {
    id: "logical-league",
    title: "LOGICAL LEAGUE",
    description: "A battle of wits where logic and reasoning are your only weapons.",
    rules: ["Team of 2 members", "Multiple rounds of puzzles", "Time-based elimination"],
    icon: Brain,
    type: 'tech'
  },
  {
    id: "innovation-meet",
    title: "INNOVATION MEET",
    description: "Present your groundbreaking ideas and projects to the industry experts.",
    rules: ["Team of 2-3 members", "Abstract submission required", "Presentation duration: 10 mins"],
    icon: Lightbulb,
    type: 'tech'
  },
  {
    id: "neurolink",
    title: "NEUROLINK",
    description: "A fast-paced technical quiz that covers the latest trends in IT.",
    rules: ["Individual or Team of 2", "Buzzer rounds", "General IT knowledge"],
    icon: Users,
    type: 'non-tech'
  },
  {
    id: "infographix",
    title: "INFOGRAPHIX",
    description: "Showcase your creative design skills through digital poster making.",
    rules: ["Individual participation", "Topic will be given on-spot", "Tools: Canva, Photoshop, etc."],
    icon: Layout,
    type: 'non-tech'
  },
  {
    id: "strategic-simulation",
    title: "STRATEGIC SIMULATION",
    description: "A management-style event to test your decision-making and strategy.",
    rules: ["Team of 2 members", "Case study analysis", "Crisis management rounds"],
    icon: Target,
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
      className="glass-card p-8 rounded-2xl cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <event.icon className="w-24 h-24 text-neon-cyan" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-6 border border-neon-cyan/20 group-hover:bg-neon-cyan group-hover:text-cyber-dark transition-all duration-300">
          <event.icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
          {event.title}
        </h3>
        <p className="text-white text-sm leading-relaxed mb-6">
          {event.description}
        </p>
        <div className="flex items-center text-xs font-mono tracking-widest text-neon-cyan uppercase">
          View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
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
            NON-TECHNICAL <span className="text-neon-blue">EVENTS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

