import React from 'react';
import { motion } from 'framer-motion';

const guests = [
  { name: "Kunal Shah", role: "Founder, CRED", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80" },
  { name: "Ankur Warikoo", role: "Entrepreneur & Author", img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80" },
  { name: "Raj Shamani", role: "Content Creator", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80" },
  { name: "Aman Gupta", role: "Co-Founder, boAt", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Peyush Bansal", role: "Founder, Lenskart", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" }
];

const FeaturedGuests = () => {
  return (
    <section id="guests" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Featured <span className="text-[#D6001C]">Guests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D6001C] to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10">
            {guests.map((guest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#D6001C] group-hover:to-[#D6001C]/20 transition-all duration-500 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#080808]">
                    <img 
                      src={guest.img} 
                      alt={guest.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-poppins font-bold text-white group-hover:text-[#D6001C] transition-colors">{guest.name}</h4>
                <p className="text-sm font-inter text-[#B8B8B8] text-center max-w-[120px]">{guest.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuests;
