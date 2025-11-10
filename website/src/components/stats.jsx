import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from './Languagecontext';
import { Briefcase, Users, Building2, MapPin } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Briefcase,
      value: 250,
      suffix: '+',
      label: t.stats.projects,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: t.stats.investors,
      color: 'from-green-400 to-green-500',
    },
    {
      icon: Building2,
      value: 12,
      suffix: '',
      label: t.stats.sectors,
      color: 'from-green-600 to-green-700',
    },
    {
      icon: MapPin,
      value: 35,
      suffix: '+',
      label: t.stats.countries,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/5 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={stat.value} />
                      <span>{stat.suffix}</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;