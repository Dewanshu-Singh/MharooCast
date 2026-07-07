import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Lightbulb, Users, Target, Quote } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="glass p-6 rounded-2xl border border-white/5 hover:border-[#D6001C]/30 transition-all duration-300 group bg-black/20 hover:-translate-y-1 shadow-lg"
  >
    <div className="w-12 h-12 rounded-xl bg-[#D6001C]/10 flex items-center justify-center mb-5 group-hover:bg-[#D6001C] transition-colors duration-300">
      <Icon size={24} className="text-[#D6001C] group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-lg md:text-xl font-poppins font-semibold text-white mb-3">{title}</h3>
    <p className="text-sm font-inter text-white/60 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#D6001C] rounded-full blur-[250px] opacity-10" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF4D6D] rounded-full blur-[250px] opacity-[0.05]" />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#D6001C] font-semibold tracking-widest uppercase text-sm mb-3 block">Discover Our Mission</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6001C] to-[#FF4D6D]">Mharoo</span> Cast?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#D6001C] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Quote */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg font-inter text-white/70 leading-relaxed"
            >
              <p>
                <strong className="text-white font-semibold">Mharoo Cast</strong> is your destination for meaningful conversations and actionable insights. We sit down with industry experts and visionary creators to explore business, creativity, and personal growth—inspiring you to think differently and take bold actions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden shadow-2xl"
            >
              <Quote className="absolute -top-4 -right-4 text-white/5 w-32 h-32 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-poppins font-medium text-white italic leading-snug mb-6">
                  "Our goal is to build a community of curious minds who believe in learning through shared experiences and conversations."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#D6001C] to-[#FF4D6D] rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#FF4D6D]">The Mharoo Cast Vision</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D6001C] rounded-full blur-[150px] opacity-10 pointer-events-none" />
             
            <FeatureCard 
              icon={Mic} 
              title="Authentic Voices" 
              description="Real, unfiltered stories from changemakers who are shaping the future." 
              delay={0.2}
            />
            <FeatureCard 
              icon={Lightbulb} 
              title="Actionable Insights" 
              description="Practical takeaways and knowledge you can apply immediately." 
              delay={0.4}
            />
            <FeatureCard 
              icon={Users} 
              title="Curious Community" 
              description="Connect with like-minded individuals eager to learn and grow." 
              delay={0.6}
            />
            <FeatureCard 
              icon={Target} 
              title="Personal Growth" 
              description="Inspiring perspectives designed to challenge the way you think." 
              delay={0.8}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
