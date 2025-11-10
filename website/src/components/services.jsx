import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './Languagecontext';
import {
  Search,
  FileCheck,
  Users,
  Scale,
  Network,
  Lightbulb,
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Search,
      title: t.services.dealSourcing.title,
      description: t.services.dealSourcing.description,
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: FileCheck,
      title: t.services.dueDiligence.title,
      description: t.services.dueDiligence.description,
      gradient: 'from-green-600 to-green-700',
    },
    {
      icon: Users,
      title: t.services.structuring.title,
      description: t.services.structuring.description,
      gradient: 'from-green-400 to-green-500',
    },
    {
      icon: Scale,
      title: t.services.regulatory.title,
      description: t.services.regulatory.description,
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Network,
      title: t.services.networking.title,
      description: t.services.networking.description,
      gradient: 'from-green-600 to-green-700',
    },
    {
      icon: Lightbulb,
      title: t.services.advisory.title,
      description: t.services.advisory.description,
      gradient: 'from-green-400 to-green-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              <span className="text-green-400 text-sm font-medium">What We Do</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t.services.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all backdrop-blur-sm">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-green-500/30 transition-shadow`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Looking for a customized solution?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;