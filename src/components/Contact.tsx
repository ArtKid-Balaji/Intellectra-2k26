import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";

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
              Have questions about symposium? Our team is here to help.
            </p>

            {/* Location Section */}
            <div className="mb-10">

              {/* Heading */}
              <h4 className="text-white font-bold text-3xl mb-4">
                Location
              </h4>

              {/* Icon + Address Row */}
              <div className="flex items-start gap-4">

                <motion.a
                  href="https://www.google.com/maps/place/Adhiparasakthi+Engineering+College/@12.436921,79.8194101,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5319fc373f6277:0xca3a2cbf53c66b03!8m2!3d12.436921!4d79.821985!16s%2Fm%2F011197_n?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-16 h-16 rounded-lg glass-card flex items-center justify-center"
                >
                  <MapPin
                    className="w-7 h-7 text-neon-cyan"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(0,242,255,0.7)) drop-shadow(0 0 16px rgba(0,242,255,0.5))"
                    }}
                  />
                </motion.a>

                <p className="text-white text-lg leading-relaxed">
                  Adhiparasakthi Engineering College,<br />
                  Melmaruvathur – 603319, Tamil Nadu.
                </p>

              </div>
            </div>

            <h2 className="text-4xl font-display font-bold text-white mb-3">
              Follow Us <span className="text-neon-cyan">Online</span>
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/company/adhiparasakthi-engineering-college/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-lg glass-card flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-label="LinkedIn"
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  style={{
                    filter: "drop-shadow(0 0 8px #2563eb) drop-shadow(0 0 16px #2563eb)"
                  }}
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.12H5.67V18H8.34V10.12ZM7 5.88A1.56 1.56 0 1 0 7 9A1.56 1.56 0 0 0 7 5.88ZM18 13.62C18 10.96 16.58 9.72 14.69 9.72C13.17 9.72 12.49 10.56 12.11 11.16V10.12H9.44V18H12.11V14.1C12.11 13.07 12.31 12.08 13.58 12.08C14.83 12.08 14.84 13.24 14.84 14.16V18H17.5V13.62H18Z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/apec1984/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-lg glass-card flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Instagram"
                  className="w-5 h-5 text-pink-500"
                  fill="currentColor"
                  style={{
                    filter: "drop-shadow(0 0 8px #ec4899) drop-shadow(0 0 16px #ec4899)"
                  }}
                >
                  <path d="M7.75 2H16.25C19.56 2 22 4.44 22 7.75V16.25C22 19.56 19.56 22 16.25 22H7.75C4.44 22 2 19.56 2 16.25V7.75C2 4.44 4.44 2 7.75 2ZM7.56 4A3.56 3.56 0 0 0 4 7.56V16.44A3.56 3.56 0 0 0 7.56 20H16.44A3.56 3.56 0 0 0 20 16.44V7.56A3.56 3.56 0 0 0 16.44 4H7.56ZM17.5 5.5A1 1 0 1 1 16.5 6.5A1 1 0 0 1 17.5 5.5ZM12 7A5 5 0 1 1 7 12A5 5 0 0 1 12 7ZM12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/adhiparasakthiengineeringcollege/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-lg glass-card flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Facebook"
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  style={{
                    filter: "drop-shadow(0 0 8px #2563eb) drop-shadow(0 0 16px #2563eb)"
                  }}
                >
                  <path d="M13.5 21V13.8H16L16.38 10.98H13.5V9.18C13.5 8.37 13.74 7.82 14.95 7.82H16.5V5.3C15.75 5.2 15 5.15 14.25 5.15C11.98 5.15 10.5 6.53 10.5 9.06V10.98H8V13.8H10.5V21H13.5Z" />
                </svg>
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
                    <a href="tel:+919342661192" className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 text-neon-cyan" />
                    </a>
                    <div>
                      <p className="text-white font-medium text-sm">
                        Mr. L. BALAJI (Student Coordinator)
                      </p>
                      <p className="text-slate-400 text-sm">
                        +91 8608802727
                      </p>
                    </div>
                  </div>

                  {/* Student Vice Chairperson */}
                  <div className="flex items-center gap-5">
                    <a href="tel:+919655777274" className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 text-neon-cyan" />
                    </a>
                    <div>
                      <p className="text-white font-medium text-sm">
                        Ms. S. MOHANAPRIYA (Student Coordinator)
                      </p>
                      <p className="text-slate-400 text-sm">
                        +91 6374663499
                      </p>
                    </div>
                  </div>

                  {/* Staff Coordinator */}
                  <div className="flex items-center gap-5">
                    <a href="tel:+919080315402" className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 text-neon-cyan" />
                    </a>
                    <div>
                      <p className="text-white font-medium text-sm">
                        Mrs. S. SASIREKHA (Faculty Coordinator)
                      </p>
                      <p className="text-slate-400 text-sm">
                        +91 8778261057
                      </p>
                    </div>
                  </div>

                  {/* Convener */}
                  <div className="flex items-center gap-5">
                    <a href="tel:+918220925050" className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 text-neon-cyan" />
                    </a>
                    <div>
                      <p className="text-white font-medium text-sm">
                        Mr. P. SAKTHIVEL (Convener)
                      </p>
                      <p className="text-slate-400 text-sm">
                        +91 9578134230
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
