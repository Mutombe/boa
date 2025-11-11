import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe2, Sparkles } from 'lucide-react';
import { useLanguage } from './Languagecontext';
import { Link } from 'react-scroll';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden gravita-font">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/2.jpg")',
          }}
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
        
        {/* Green tint overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-900/10 mix-blend-overlay" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-3 h-3 bg-green-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-300 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                {t.hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 "
          >
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            <br className="hidden sm:block" />
            {t.hero.titleEnd}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed px-4 gravita-font"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="cta" spy={true} smooth={true} offset={-80} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all flex items-center space-x-2"
              >
                <span className='gravita-font'>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-80} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-green-500/50 text-green-500 rounded-lg font-semibold hover:bg-green-900/20 transition-all gravita-font backdrop-blur-sm"
              >
                {t.hero.learnMore}
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-xl hover:border-green-500/40 transition-colors backdrop-blur-sm"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm">Growth</div>
                <div className="text-gray-500 text-xs">Focused</div>
              </div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-xl hover:border-green-500/40 transition-colors backdrop-blur-sm"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Globe2 className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm">Global</div>
                <div className="text-gray-500 text-xs">Network</div>
              </div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-xl hover:border-green-500/40 transition-colors backdrop-blur-sm"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm">Expert</div>
                <div className="text-gray-500 text-xs">Advisory</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Hero;