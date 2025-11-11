import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './Languagecontext';
import { Search, Target, LineChart, Handshake, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Search,
      title: t.process.step1.title,
      description: t.process.step1.description,
      color: 'from-green-400 to-green-500',
      highlights: ['Market Research', 'Opportunity Analysis', 'Initial Screening'],
    },
    {
      number: '02',
      icon: Target,
      title: t.process.step2.title,
      description: t.process.step2.description,
      color: 'from-green-500 to-green-600',
      highlights: ['Financial Review', 'Risk Assessment', 'Legal Compliance'],
    },
    {
      number: '03',
      icon: LineChart,
      title: t.process.step3.title,
      description: t.process.step3.description,
      color: 'from-green-600 to-green-700',
      highlights: ['Deal Terms', 'Value Creation', 'Documentation'],
    },
    {
      number: '04',
      icon: Handshake,
      title: t.process.step4.title,
      description: t.process.step4.description,
      color: 'from-green-500 to-green-600',
      highlights: ['Portfolio Support', 'Performance Tracking', 'Exit Strategy'],
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Blended Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url("/1.jpg")',
          }}
        />
        
        {/* Gradient Overlays for Blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Additional Green Tint for Brand Consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-900/5"></div>
        
        {/* Blur Effect Layer */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full backdrop-blur-sm">
              <span className="text-green-400 text-sm font-medium">Our Process</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.process.title}{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t.process.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Layout - Alternating Timeline */}
          <div className="hidden lg:block">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500/20 via-green-500/50 to-green-500/20 transform -translate-x-1/2"></div>
            
            {/* Animated Dot Moving Down */}
            <motion.div
              initial={{ top: 0 }}
              animate={isInView ? { top: '100%' } : { top: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-green-500/50"
            >
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
            </motion.div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-5/12">
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="relative p-8 bg-gradient-to-br from-green-900/30 to-black/90 border border-green-500/30 rounded-3xl hover:border-green-500/50 transition-all backdrop-blur-sm"
                      >
                        {/* Number Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`px-4 py-2 bg-gradient-to-r ${step.color} rounded-full`}>
                            <span className="text-white font-bold text-sm">Step {step.number}</span>
                          </div>
                          <div className={`p-4 bg-gradient-to-br ${step.color} rounded-xl`}>
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {step.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: index * 0.3 + i * 0.1 + 0.3 }}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-300">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Arrow Indicator */}
                        {index < steps.length - 1 && (
                          <div className={`absolute ${
                            index % 2 === 0 ? 'right-0' : 'left-0'
                          } top-1/2 transform ${
                            index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'
                          } -translate-y-1/2`}>
                            <ArrowRight className={`w-8 h-8 text-green-500/30 ${
                              index % 2 !== 0 ? 'rotate-180' : ''
                            }`} />
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                      className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-black shadow-2xl`}
                    >
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                      <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping"></div>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical Cards */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-green-500/50 to-green-500/20 z-0"></div>
                )}

                {/* Card */}
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative p-6 bg-gradient-to-br from-green-900/30 to-black/90 border border-green-500/30 rounded-2xl backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Number Circle */}
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-black shadow-lg`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 bg-gradient-to-r ${step.color} rounded-full text-white text-xs font-bold`}>
                            Step {step.number}
                          </span>
                          <div className={`p-2 bg-gradient-to-br ${step.color} rounded-lg`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {step.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-900/20 to-black/90 p-8 backdrop-blur-sm">
            <div className="relative text-center">
              <p className="text-gray-300 text-lg mb-6">
                Ready to start your investment journey?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;