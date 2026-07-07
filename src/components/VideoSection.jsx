import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-32 bg-[#111111] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Featured <span className="text-[#D6001C]">Episode</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D6001C] to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden glass border border-white/10 group cursor-pointer aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#D6001C]/50 hover:shadow-[0_20px_60px_rgba(214,0,28,0.2)] transition-all duration-700"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          <img 
            src="/coverimg1.PNG" 
            alt="Featured Episode Cover" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#D6001C]/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(214,0,28,0.6)] group-hover:scale-110 transition-transform duration-500">
              <Play fill="white" size={36} className="ml-2 text-white" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black via-black/50 to-transparent">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-2">The Future of Media & Content</h3>
            <p className="text-[#B8B8B8] font-inter">Episode 042 • Featuring Kunal Shah</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
