import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './Languagecontext';
import {
  Building,
  Zap,
  Sprout,
  Cpu,
  Heart,
  Factory,
} from 'lucide-react';

const Sectors = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sectors = [
    {
      icon: Building,
      title: t.sectors.infrastructure,
      color: 'from-green-500 to-green-600',
      bgImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
    {
      icon: Zap,
      title: t.sectors.energy,
      color: 'from-green-400 to-green-500',
      bgImage: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
    {
      icon: Sprout,
      title: t.sectors.agriculture,
      color: 'from-green-600 to-green-700',
      bgImage: 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
    {
      icon: Cpu,
      title: t.sectors.technology,
      color: 'from-green-500 to-green-600',
      bgImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
    {
      icon: Heart,
      title: t.sectors.healthcare,
      color: 'from-green-400 to-green-500',
      bgImage: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
    {
      icon: Factory,
      title: t.sectors.manufacturing,
      color: 'from-green-600 to-green-700',
      bgImage: 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
    },
  ];

  return (
    <section id="sectors" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/5 to-black ">
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
              <span className="text-green-400 text-sm font-medium">Investment Focus</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sectors.title}{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t.sectors.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.sectors.subtitle}
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card */}
              <div 
                className="relative h-64 rounded-2xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all"
                style={{ background: sector.bgImage }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Icon */}
                  <div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-4 bg-gradient-to-br ${sector.color} rounded-xl shadow-lg`}
                    >
                      <sector.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {sector.title}
                    </h3>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400 origin-left"
                  ></motion.div>
                </div>

                {/* Particle Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 rounded-full"
                      initial={{
                        x: '50%',
                        y: '50%',
                        opacity: 0,
                      }}
                      animate={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-500/20 rounded-xl">
            <p className="text-gray-300 text-sm mb-2">
              Combined Market Opportunity
            </p>
            <p className="text-3xl font-bold text-green-400">
              $2.5T+
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;