import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, BookOpen, BarChart3, Palette, UserCircle } from 'lucide-react';

const features = [
  {
    title: "Meaningful Conversations",
    icon: MessageCircle,
    desc: "Deep dives into topics that matter with authentic voices."
  },
  {
    title: "Industry Experts",
    icon: Users,
    desc: "Learn directly from leaders who have walked the path."
  },
  {
    title: "Entrepreneur Stories",
    icon: BookOpen,
    desc: "Real-world experiences of building and scaling businesses."
  },
  {
    title: "Business Insights",
    icon: BarChart3,
    desc: "Actionable strategies to implement in your own journey."
  },
  {
    title: "Creative Minds",
    icon: Palette,
    desc: "Explore the intersection of art, design, and innovation."
  },
  {
    title: "Personal Growth",
    icon: UserCircle,
    desc: "Tools and mindsets to elevate your personal development."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhySection = () => {
  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D6001C] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF4D6D] rounded-full blur-[200px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-[#D6001C] font-semibold tracking-widest uppercase text-xs mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6001C] to-[#FF4D6D]">Mharoo</span> Cast
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D6001C] to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group overflow-hidden glass p-6 rounded-2xl border border-white/5 bg-[#111111]/60 hover:bg-[#151515] hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(214,0,28,0.25)] transition-all duration-300 cursor-default"
            >
              {/* Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6001C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-[#D6001C] group-hover:to-[#990014] transition-all duration-300">
                  <feature.icon size={22} className="text-[#D6001C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF4D6D] transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 font-inter leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
