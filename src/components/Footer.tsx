export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            
            <div>
              <h3 className="text-4xl font-display font-bold font-Orbitron text-white mb-2">
                INTELLECTRA
                <span className="text-neon-cyan"> 2K26</span>
              </h3>

              <p className="text-white text-sm md:text-base font-Space Grotesk max-w-md leading-relaxed">
                National Level Technical Symposium organized by the 
                Department of Information Technology, 
                Adhiparasakthi Engineering College.
              </p>
            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="md:text-right space-y-3 flex flex-col justify-center h-full">

            {/* Copyright */}
            <div>
              <p className="text-white text-m">
                © 2026 INTELLECTRA. All Rights Reserved.
              </p>

             <p className="text-s font-bold tracking-wide text-white mt-1">
  Designed & Developed by 
  <span className="text-neon-cyan"> Mr. L. BALAJI</span>
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
