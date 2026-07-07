import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Sparkles, TrendingUp, Briefcase, Lightbulb, UserPlus, ChevronRight } from 'lucide-react';

const FloatingCard = ({ title, icon: Icon, delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay,
      ease: "easeOut"
    }}
    style={{ left: x, top: y }}
    className="absolute z-20 hidden lg:flex flex-col items-center"
  >
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
      className="group relative glass px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_8px_32px_rgba(214,0,28,0.1)] hover:border-[#D6001C]/50 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-md bg-black/40 hover:-translate-y-1"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D6001C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 bg-gradient-to-br from-[#D6001C] to-[#800010] p-2 rounded-xl text-white shadow-lg shadow-[#D6001C]/30">
        <Icon size={16} />
      </div>
      <span className="relative z-10 font-inter text-xs font-semibold text-white/90 tracking-wide">{title}</span>
    </motion.div>
  </motion.div>
);

const Particle = ({ delay, duration, x, y, size }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0 }}
    animate={{ 
      opacity: [0, 1, 0], 
      y: -150,
      x: (Math.random() - 0.5) * 50
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeOut" }}
    style={{ left: x, top: y, width: size, height: size }}
    className="absolute rounded-full bg-gradient-to-t from-[#D6001C] to-[#FF4D6D] blur-[1px] shadow-[0_0_10px_#D6001C]"
  />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-8 overflow-hidden bg-black selection:bg-[#D6001C]/30">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0004] via-[#050001] to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      {/* Ambient Red Glows with Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[-20%] w-[600px] h-[600px] bg-[#D6001C] rounded-full blur-[200px] pointer-events-none mix-blend-screen" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#FF4D6D] rounded-full blur-[180px] pointer-events-none mix-blend-screen" 
      />

      <div className="max-w-[85rem] mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-6 items-center relative z-20">
        
        {/* Left Side: Content */}
        <div className="flex flex-col gap-8 max-w-2xl relative z-10 pt-10 lg:pt-0">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit shadow-[0_4px_20px_rgba(214,0,28,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6001C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6001C]"></span>
            </span>
            <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-white/90">New Episode Out Now</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-poppins font-extrabold leading-[1.1] text-white tracking-tight">
              Meaningful <br />
              <span className="relative inline-block mt-1 mb-1">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#D6001C] to-[#FF4D6D] opacity-30 blur-2xl rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#D6001C] via-[#FF4D6D] to-[#D6001C] animate-gradient-x">
                  Conversations.
                </span>
              </span><br />
              Stories That <span className="italic font-light text-white/90">Inspire.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/60 font-inter leading-relaxed max-w-xl font-light"
          >
            Mharoo Cast is a premium podcast platform dedicated to deep dives, inspiring stories, and valuable insights from world-class entrepreneurs and creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <button className="group relative flex items-center gap-2 bg-gradient-to-r from-[#D6001C] to-[#990014] hover:to-[#D6001C] transition-all duration-500 text-white px-7 py-3.5 rounded-full font-inter font-semibold shadow-[0_0_40px_rgba(214,0,28,0.4)] hover:shadow-[0_0_60px_rgba(214,0,28,0.6)] hover:-translate-y-1 overflow-hidden border border-[#D6001C]/50 text-sm">
              <span className="relative z-10 flex items-center gap-2">
                <Play fill="currentColor" size={16} className="group-hover:scale-110 transition-transform" /> Watch Episodes
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full" />
            </button>
            
            <button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-white px-7 py-3.5 rounded-full font-inter font-semibold backdrop-blur-md hover:-translate-y-1 text-sm">
              <Mic size={16} className="text-[#FF4D6D] group-hover:scale-110 transition-transform" /> Explore Podcast
              <ChevronRight size={16} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
          
          {/* Trusted By / Listen On */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="pt-6 border-t border-white/10 flex items-center gap-6 mt-2"
          >
            <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Listen On</span>
            <div className="flex gap-5 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
               <div className="flex items-center gap-2 group">
                 <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/30 flex items-center justify-center group-hover:bg-[#1DB954] group-hover:border-[#1DB954] transition-all duration-300">
                   <Play size={12} fill="currentColor" className="text-[#1DB954] group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors hidden sm:block">Spotify</span>
               </div>
               <div className="flex items-center gap-2 group">
                 <div className="w-8 h-8 rounded-full bg-[#FF0000]/20 border border-[#FF0000]/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300">
                   <Play size={12} fill="currentColor" className="text-[#FF0000] group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors hidden sm:block">YouTube</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[450px] lg:h-[550px] w-full flex items-center justify-center mt-6 lg:mt-0"
        >
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden rounded-full mask-image-radial pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <Particle 
                key={i} 
                delay={Math.random() * 5} 
                duration={3 + Math.random() * 4} 
                x={`${20 + Math.random() * 60}%`} 
                y={`${50 + Math.random() * 50}%`}
                size={2 + Math.random() * 4}
              />
            ))}
          </div>

          {/* Central Glowing Mic Element */}
          <div className="relative z-0 flex items-center justify-center">
            
            {/* Outer Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] border border-dashed border-white/20 rounded-full opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] h-[250px] md:w-[360px] md:h-[360px] border border-white/10 rounded-full opacity-70"
            />

            <motion.div 
              animate={{ 
                boxShadow: ['0 0 40px rgba(214,0,28,0.4)', '0 0 70px rgba(214,0,28,0.8)', '0 0 40px rgba(214,0,28,0.4)'],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#1a0004] to-[#330008] border border-[#D6001C]/40 flex items-center justify-center glass backdrop-blur-2xl z-10 before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)] shadow-2xl"
            >
              <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                <motion.img 
                  animate={{ 
                    y: [-6, 6, -6],
                    scale: [1.25, 1.3, 1.25],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  src="/MicForCAst-removebg-preview.png" 
                  alt="MharooCast Mic" 
                  className="w-[150px] h-[150px] md:w-[210px] md:h-[210px] object-contain drop-shadow-[0_0_35px_rgba(214,0,28,0.9)] relative z-20" 
                />
              </div>
            </motion.div>

          </div>

          {/* Floating Cards */}
          <FloatingCard title="Entrepreneurship" icon={Briefcase} delay={0.2} x="0%" y="15%" />
          <FloatingCard title="Creativity" icon={Sparkles} delay={0.6} x="75%" y="12%" />
          <FloatingCard title="Innovation" icon={Lightbulb} delay={1.0} x="85%" y="55%" />
          <FloatingCard title="Business" icon={TrendingUp} delay={1.4} x="65%" y="85%" />
          <FloatingCard title="Personal Growth" icon={UserPlus} delay={1.8} x="-2%" y="70%" />

        </motion.div>
      </div>
      
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .mask-image-radial {
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
