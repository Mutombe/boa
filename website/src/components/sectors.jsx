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
  TrendingUp,
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
      stats: '$450B',
      label: 'Market Size',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', // Modern infrastructure/buildings
    },
    {
      icon: Zap,
      title: t.sectors.energy,
      color: 'from-green-400 to-green-500',
      stats: '$380B',
      label: 'Market Size',
      image: '/8.jpg', // Solar/renewable energy
    },
    {
      icon: Sprout,
      title: t.sectors.agriculture,
      color: 'from-green-600 to-green-700',
      stats: '$520B',
      label: 'Market Size',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', // Agriculture/farming
    },
    {
      icon: Cpu,
      title: t.sectors.technology,
      color: 'from-green-500 to-green-600',
      stats: '$290B',
      label: 'Market Size',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // Technology/circuits
    },
    {
      icon: Heart,
      title: t.sectors.healthcare,
      color: 'from-green-400 to-green-500',
      stats: '$420B',
      label: 'Market Size',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', // Healthcare/medical
    },
    {
      icon: Factory,
      title: t.sectors.manufacturing,
      color: 'from-green-600 to-green-700',
      stats: '$480B',
      label: 'Market Size',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Manufacturing/factory
    },
  ];

  return (
    <section id="sectors" ref={ref} className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/5 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-900/30 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-xs sm:text-sm font-medium">Investment Focus</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            {t.sectors.title}{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t.sectors.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            {t.sectors.subtitle}
          </p>
        </motion.div>

        {/* Sectors Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              className="relative group cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-900/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card Container */}
              <div className="relative h-full">
                {/* Main Card */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all bg-black">
                  {/* Background Image with Blend */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={sector.image} 
                      alt={sector.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ 
                        mixBlendMode: 'luminosity',
                        filter: 'saturate(0) brightness(0.7)'
                      }}
                    />
                    {/* Green overlay blend */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-950/80 to-black/95 mix-blend-multiply"></div>
                    {/* Additional green tint */}
                    <div className="absolute inset-0 bg-green-500/5"></div>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-5 sm:p-6 lg:p-7 h-full flex flex-col">
                    {/* Icon Section */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-3 sm:p-3.5 bg-gradient-to-br ${sector.color} rounded-xl shadow-lg mb-4 sm:mb-5 w-fit`}
                    >
                      <sector.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors">
                      {sector.title}
                    </h3>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-green-500/30 via-green-500/10 to-transparent mb-3 sm:mb-4"></div>

                    {/* Stats */}
                    <div className="space-y-2 mt-auto">
                      <div className="flex items-baseline justify-between">
                        <span className="text-gray-400 text-xs sm:text-sm">{sector.label}</span>
                        <span className="text-xl sm:text-2xl font-bold text-green-400">{sector.stats}</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-1.5 sm:h-2 bg-green-900/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.15 + 0.3 }}
                          className={`h-full bg-gradient-to-r ${sector.color} rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-green-500/10"
                    >
                      <button className="w-full py-2 text-green-400 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 group/btn hover:text-green-300 transition-colors">
                        <span>Explore Opportunities</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </button>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-green-500/5 to-transparent rounded-bl-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-14 lg:mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-900/20 to-black p-6 sm:p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Combined Market Opportunity
                </h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  Across all investment sectors
                </p>
              </div>
              
              <div className="text-center lg:text-right">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.8, delay: 1, type: "spring" }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent mb-2"
                >
                  $2.5T+
                </motion.div>
                <div className="flex items-center justify-center lg:justify-end space-x-2 text-green-400">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-semibold">Growing annually</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;