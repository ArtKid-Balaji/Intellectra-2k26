import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

      {/* ================= LEFT SIDE ================= */}
<div className="space-y-3 mt-2 md:mt-0">
  <h3 className="text-3xl font-display font-bold">
                    <span className="text-neon-cyan"> LEADERSHIP</span>

  </h3>

  <div>
    <p className="text-white font-semibold">
      Dr. A. Bhuvaneshwari
    </p>
    <p className="text-slate-400 text-sm">
      HOD / IT & Vice Principal
    </p>
  </div>

  <div>
    <p className="text-white font-semibold">
      Dr. J. Raja
    </p>
    <p className="text-slate-400 text-sm">
      Principal
    </p>
  </div>

  <div>
    <p className="text-white font-semibold">
      Dr. V. Ramasamy
    </p>
    <p className="text-slate-400 text-sm">
      Dean
    </p>
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
              <p className="text-white text-m">
                © 2026 INTELLECTRA . All Rights Reserved.
              </p>

              <p className="text-xs font-mono text-white uppercase tracking-widest mt-3">
                Designed & Developed by Balaji
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