import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-10">

            {/* Staff Coordinator */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Phone className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="text-white font-medium">
                  Vanmathi – Staff Coordinator
                </p>
                <p className="text-slate-400 text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            {/* Convener */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Phone className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="text-white font-medium">
                  Lavanya – Convener
                </p>
                <p className="text-slate-400 text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="md:text-right space-y-6">

            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                INTELLECTRA
                <span className="text-neon-cyan"> 2K26</span>
              </h3>

              <p className="text-white text-sm max-w-md md:ml-auto leading-relaxed">
                National Level Technical Symposium organized by the 
                Department of Information Technology, 
                Adhiparasakthi Engineering College.
              </p>
            </div>

            <div>
              <p className="text-white text-sm">
                © 2026 INTELLECTRA. All rights reserved.
              </p>

              <p className="text-xs font-mono text-white uppercase tracking-widest mt-3">
                Designed with
                Love for Innovation
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