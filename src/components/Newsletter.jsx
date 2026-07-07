import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080808]">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: ['-20%', '0%', '-20%'],
            y: ['-20%', '10%', '-20%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#D6001C] rounded-full blur-[250px] opacity-30 mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: ['20%', '-10%', '20%'],
            y: ['20%', '-20%', '20%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF4D6D] rounded-full blur-[200px] opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black text-white mb-6">
            Never Miss An <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6001C] to-[#FF4D6D]">Episode</span>
          </h2>
          <p className="text-lg md:text-xl text-[#B8B8B8] font-inter mb-12 max-w-xl mx-auto">
            Join 100,000+ listeners. Get the latest episodes, exclusive insights, and behind-the-scenes content delivered straight to your inbox.
          </p>

          <form className="relative max-w-xl mx-auto flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-full px-8 py-5 pr-40 focus:outline-none focus:border-[#D6001C]/50 transition-colors backdrop-blur-md"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-[#D6001C] hover:bg-[#b00017] transition-colors text-white font-poppins font-semibold px-8 rounded-full flex items-center gap-2"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
          
          <p className="text-xs text-[#B8B8B8]/60 font-inter mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
