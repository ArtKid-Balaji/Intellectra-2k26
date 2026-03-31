import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            
            <div>
              <h3 className="text-4xl font-display font-bold font-Orbitron text-white mb-2">
                INTELLECTRA
                <span className="text-neon-cyan"> 2K26</span>
              </h3>

              <p className="text-white text-xl font-Space Grotesk max-w-md leading-relaxed">
                National Level Technical Symposium organized by the 
                Department of Information Technology, 
                Adhiparasakthi Engineering College.
              </p>
            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="md:text-right space-y-3">

            {/* Leadership */}
            <div>
              <h3 className="text-3xl font-display font-bold">
                <span className="text-neon-cyan">LEADERSHIP</span>
              </h3>

              <p className="text-white font-semibold mt-1">
                Dr. A. Bhuvaneshwari
              </p>
              <p className="text-slate-400 text-sm">
                HOD / IT & Vice Principal
              </p>
            </div>

            {/* Copyright */}
            <div>
              <p className="text-white text-sm">
                © 2026 INTELLECTRA. All Rights Reserved.
              </p>

             <p className="text-s font-bold tracking-wide text-white mt-1">
  Designed & Developed by 
  <span className="text-neon-cyan"> L. BALAJI</span>
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] 
                      bg-gradient-to-r 
                      from-transparent 
                      via-neon-cyan/40 
                      to-transparent" />
    </footer>
  );
};