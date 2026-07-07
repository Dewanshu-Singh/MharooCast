import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { title: "Learn from founders", desc: "Real conversations with people building companies, not spouting theory." },
  { title: "Gain practical insights", desc: "Frameworks and tactics you can implement immediately." },
  { title: "Hear inspiring journeys", desc: "Origin stories that remind you why you started." },
  { title: "Stay updated with trends", desc: "Understand where the market is moving before everyone else." },
  { title: "Expand your mindset", desc: "Challenge your assumptions and think on a completely new level." }
];

const WhyListen = () => {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D6001C] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Why <span className="text-[#D6001C]">Listen</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D6001C] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-0 relative">
          {points.map((point, idx) => (
            <div key={idx} className={`relative flex w-full ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} md:mb-12 last:mb-0`}>
              
              {/* Desktop SVG Connector Line */}
              {idx < points.length - 1 && (
                <div className="hidden md:block absolute top-[100%] left-0 w-full z-0 pointer-events-none -my-6">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="w-full overflow-hidden"
                  >
                    <svg className="w-full" viewBox="0 -50 1000 170">
                      {idx % 2 === 0 ? (
                        <motion.path 
                          d="M 150 0 Q 450 -50, 550 120" 
                          fill="transparent" 
                          stroke="#D6001C" 
                          strokeWidth="3" 
                          strokeDasharray="8 8" 
                          className="opacity-60"
                          animate={{ strokeDashoffset: [0, -32] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                      ) : (
                        <motion.path 
                          d="M 550 0 Q 250 -50, 150 120" 
                          fill="transparent" 
                          stroke="#D6001C" 
                          strokeWidth="3" 
                          strokeDasharray="8 8" 
                          className="opacity-60"
                          animate={{ strokeDashoffset: [0, -32] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                      )}
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative z-10 flex items-center p-5 md:p-6 glass bg-[#0c0c0c]/90 border border-white/5 rounded-3xl w-full max-w-xl group hover:border-[#D6001C]/30 hover:bg-[#111111] transition-colors shadow-xl hover:shadow-[0_15px_40px_rgba(214,0,28,0.15)] cursor-default"
              >
                {/* Red Glow behind number on hover */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#D6001C] rounded-full blur-[25px] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative w-12 h-12 md:w-14 md:h-14 min-w-[48px] md:min-w-[56px] rounded-full bg-gradient-to-br from-[#D6001C] to-[#990014] flex items-center justify-center text-white font-poppins font-bold text-lg md:text-xl mr-5 md:mr-6 shadow-[0_0_15px_rgba(214,0,28,0.4)] group-hover:shadow-[0_0_25px_rgba(214,0,28,0.8)] transition-shadow duration-300">
                  0{idx + 1}
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-poppins font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF4D6D] transition-all duration-300">{point.title}</h3>
                  <p className="text-[#B8B8B8] font-inter text-xs md:text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyListen;
