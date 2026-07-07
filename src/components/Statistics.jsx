import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (to - from) + from);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { num: 50, suffix: "+", label: "Episodes" },
  { num: 100, suffix: "K+", label: "Listeners" },
  { num: 30, suffix: "+", label: "Industry Experts" },
  { num: 1000, suffix: "+", label: "Community Members" }
];

const Statistics = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D6001C]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl font-poppins font-black text-white mb-2 tracking-tight">
                <Counter from={0} to={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="text-[#D6001C] font-inter font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
