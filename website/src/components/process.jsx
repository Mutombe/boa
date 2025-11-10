import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './Languagecontext';
import { Search, Target, LineChart, Handshake } from 'lucide-react';

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
    },
    {
      number: '02',
      icon: Target,
      title: t.process.step2.title,
      description: t.process.step2.description,
      color: 'from-green-500 to-green-600',
    },
    {
      number: '03',
      icon: LineChart,
      title: t.process.step3.title,
      description: t.process.step3.description,
      color: 'from-green-600 to-green-700',
    },
    {
      number: '04',
      icon: Handshake,
      title: t.process.step4.title,
      description: t.process.step4.description,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full">
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

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-900/50 via-green-500/50 to-green-900/50 -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-green-500/50 to-green-900/50 -translate-x-1/2 z-0"></div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative z-10 h-full"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all backdrop-blur-sm h-full flex flex-col">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-black`}>
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-green-900/30 rounded-xl border border-green-500/20">
                        <step.icon className="w-7 h-7 text-green-400" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-6 pt-6 border-t border-green-500/10">
                      <div className="flex items-center space-x-2">
                        <div className="flex-grow h-1 bg-green-900/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '100%' } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                            className={`h-full bg-gradient-to-r ${step.color}`}
                          ></motion.div>
                        </div>
                        <span className="text-green-400 text-xs font-medium">Step {index + 1}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl">
            <p className="text-gray-300 mb-4">
              Ready to start your investment journey?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;