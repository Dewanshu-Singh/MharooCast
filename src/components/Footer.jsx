import React from 'react';
import { MonitorPlay, Camera, Briefcase, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="font-poppins font-bold text-2xl tracking-tight text-white mb-4">
              <span className="text-[#D6001C]">Mharoo</span>Cast
            </span>
            <p className="text-[#B8B8B8] font-inter text-sm max-w-xs text-center md:text-left">
              Meaningful conversations, inspiring stories, and valuable insights for curious minds.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-poppins font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <a href="#about" className="text-[#B8B8B8] hover:text-white transition-colors text-sm font-inter">About Us</a>
              <a href="#episodes" className="text-[#B8B8B8] hover:text-white transition-colors text-sm font-inter">Latest Episodes</a>
              <a href="#guests" className="text-[#B8B8B8] hover:text-white transition-colors text-sm font-inter">Featured Guests</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-poppins font-semibold mb-4">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B8B8B8] hover:bg-[#D6001C] hover:text-white transition-colors">
                <MonitorPlay size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B8B8B8] hover:bg-[#D6001C] hover:text-white transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B8B8B8] hover:bg-[#D6001C] hover:text-white transition-colors">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B8B8B8] hover:bg-[#D6001C] hover:text-white transition-colors">
                <Headphones size={18} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#B8B8B8]/60 font-inter text-sm">
            &copy; {new Date().getFullYear()} Mharoo Cast. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#B8B8B8]/60 hover:text-white transition-colors text-sm font-inter">Privacy Policy</a>
            <a href="#" className="text-[#B8B8B8]/60 hover:text-white transition-colors text-sm font-inter">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
