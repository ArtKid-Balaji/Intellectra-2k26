import { motion } from "motion/react";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5">
              GET IN <span className="text-neon-cyan">TOUCH</span>
            </h2>

            <p className="text-white mb-10 text-lg">
              Have questions about the symposium? Our team is here to help you navigate the future.
            </p>

            {/* Location */}
            <div className="flex items-start gap-6 mb-12">
              <div className="w-18 h-18 rounded-xl glass-card flex items-center justify-center border-white/5">
                <MapPin className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-white text-sm leading-relaxed">
                  Adhiparasakthi Engineering College,<br />
                  Melmaruvathur – 603319, Tamil Nadu.
                </p>
              </div>
            </div>
             <h2 className="text-4xl font-display font-bold text-white mb-6">
              Follow Us <span className="text-neon-cyan">ONLINE</span>
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4">

              <motion.a
  href="https://www.instagram.com/apec1984/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  className="w-14 h-14 rounded-lg glass-card flex items-center justify-center"
>
  <Instagram
    className="w-5 h-5 text-pink-500"
    style={{
      filter: "drop-shadow(0 0 8px #ec4899) drop-shadow(0 0 16px #ec4899)"
    }}
  />
</motion.a>
              <motion.a
  href="https://www.facebook.com/adhiparasakthiengineeringcollege/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  className="w-14 h-14 rounded-lg glass-card flex items-center justify-center"
>
  <Facebook
    className="w-5 h-5 text-blue-600"
    style={{
      filter: "drop-shadow(0 0 8px #2563eb) drop-shadow(0 0 16px #2563eb)"
    }}
  />
</motion.a>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex justify-center lg:justify-end"
>
  <div className="w-full max-w-md">

    <div className="p-8 rounded-3xl 
                    bg-white/5 
                    border border-white/10 
                    backdrop-blur-xl
                    transition-all duration-300">

      <h3 className="text-3xl font-bold text-white mb-5 text-center">
        Event <span className="text-neon-cyan">Coordinators</span>
      </h3>

      <div className="space-y-6">

        {/* Student Chairperson */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center">
            <Phone className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">
              Mr. K. Venkatesh (Student Chairperson)
            </p>
            <p className="text-slate-400 text-sm">
              +91 9342661192
            </p>
          </div>
        </div>

        {/* Student Vice Chairperson */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center">
            <Phone className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">
              Ms. P. Jayasri (Student Vice Chairperson)
            </p>
            <p className="text-slate-400 text-sm">
              +91 9655777274
            </p>
          </div>
        </div>

        {/* Staff Coordinator */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center">
            <Phone className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">
              Ms. S. Vanmathi (Faculty Coordinator)
            </p>
            <p className="text-slate-400 text-sm">
              +91 9080315402
            </p>
          </div>
        </div>

        {/* Convener */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center">
            <Phone className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">
              Mrs. S. Lavanya (Faculty Convener)
            </p>
            <p className="text-slate-400 text-sm">
              +91 8220925050
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};