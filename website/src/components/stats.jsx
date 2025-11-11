import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from './Languagecontext';
import { Briefcase, Users, Building2, MapPin, TrendingUp, Award } from 'lucide-react';

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
      description: 'Successfully completed',
    },
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: t.stats.investors,
      color: 'from-green-400 to-green-500',
      description: 'Active partners',
    },
    {
      icon: Building2,
      value: 12,
      suffix: '',
      label: t.stats.sectors,
      color: 'from-green-600 to-green-700',
      description: 'Industries covered',
    },
    {
      icon: MapPin,
      value: 35,
      suffix: '+',
      label: t.stats.countries,
      color: 'from-green-500 to-green-600',
      description: 'Global presence',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/5 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-medium">Our Impact</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Driving Growth{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Across Africa
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid - Asymmetric Bento Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Featured Stat - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-6 lg:row-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-900/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative h-full p-8 lg:p-12 bg-gradient-to-br from-green-900/40 to-green-900/10 border border-green-500/30 rounded-3xl hover:border-green-500/50 transition-all backdrop-blur-sm">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className={`inline-flex p-5 bg-gradient-to-br ${stats[0].color} rounded-2xl shadow-xl mb-6`}>
                    {React.createElement(stats[0].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                </div>
                <div>
                  <div className="text-6xl lg:text-7xl font-bold text-white mb-3">
                    <AnimatedCounter end={stats[0].value} />
                    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">{stats[0].suffix}</span>
                  </div>
                  <div className="text-xl lg:text-2xl font-semibold text-green-400 mb-2">
                    {stats[0].label}
                  </div>
                  <p className="text-gray-400 text-sm lg:text-base">
                    {stats[0].description}
                  </p>
                </div>
                <motion.div
                  className="absolute top-8 right-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-8 h-8 text-green-500/20" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stats - Medium */}
          {stats.slice(1, 3).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="col-span-1 lg:col-span-3 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative h-full p-6 lg:p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all">
                <div className="flex flex-col h-full justify-between">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl shadow-lg w-fit`}>
                    <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={stat.value} />
                      <span className="text-green-400">{stat.suffix}</span>
                    </div>
                    <div className="text-base lg:text-lg font-semibold text-gray-300 mb-1">
                      {stat.label}
                    </div>
                    <p className="text-gray-500 text-xs lg:text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Third Stat - Wide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 lg:col-span-6 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative h-full p-6 lg:p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <div className={`p-4 lg:p-5 bg-gradient-to-br ${stats[3].color} rounded-xl lg:rounded-2xl shadow-lg`}>
                    {React.createElement(stats[3].icon, { className:"w-6 h-6 lg:w-8 lg:h-8 text-white" })}
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                      <AnimatedCounter end={stats[3].value} />
                      <span className="text-green-400">{stats[3].suffix}</span>
                    </div>
                    <div className="text-base lg:text-lg font-semibold text-gray-300">
                      {stats[3].label}
                    </div>
                    <p className="text-gray-500 text-xs lg:text-sm mt-1">
                      {stats[3].description}
                    </p>
                  </div>
                </div>
                <Award className="w-12 h-12 lg:w-16 lg:h-16 text-green-500/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;