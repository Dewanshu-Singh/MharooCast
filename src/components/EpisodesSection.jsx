import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

const episodes = [
  {
    num: "042",
    guest: "Kunal Shah",
    topic: "Building Cred & The Indian Startup Ecosystem",
    duration: "1h 45m",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  {
    num: "041",
    guest: "Ankur Warikoo",
    topic: "Time Management & Personal Finance",
    duration: "1h 20m",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
  },
  {
    num: "040",
    guest: "Raj Shamani",
    topic: "Content Creation & Brand Building",
    duration: "1h 30m",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
  }
];

const EpisodesSection = () => {
  return (
    <section id="episodes" className="py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Latest <span className="text-[#D6001C]">Episodes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D6001C] to-transparent rounded-full" />
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-white font-inter text-sm font-medium hover:text-[#D6001C] transition-colors flex items-center gap-2"
          >
            View All Episodes &rarr;
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((ep, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#D6001C]/50 hover:shadow-[0_20px_40px_rgba(214,0,28,0.15)] transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={ep.image} 
                  alt={ep.guest} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                  <Clock size={14} className="text-[#D6001C]" />
                  <span className="text-white text-xs font-inter font-medium">{ep.duration}</span>
                </div>
                <div className="absolute top-4 left-4 z-20 bg-[#D6001C] text-white px-3 py-1 rounded-full text-xs font-bold font-poppins shadow-lg">
                  EP {ep.num}
                </div>
                
                {/* Center Play Button (Reveals on Hover) */}
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[#D6001C]/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(214,0,28,0.6)]">
                    <Play fill="white" size={24} className="ml-1 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D6001C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-[#D6001C] font-poppins text-sm font-bold tracking-wider uppercase mb-2">
                  {ep.guest}
                </h4>
                <h3 className="text-xl font-poppins font-bold text-white mb-3 line-clamp-2 leading-tight">
                  {ep.topic}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
