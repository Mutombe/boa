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
  ArrowRight,
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      size: 'large', // Featured service
    },
    {
      icon: FileCheck,
      title: t.services.dueDiligence.title,
      description: t.services.dueDiligence.description,
      gradient: 'from-green-600 to-green-700',
      image: '/7.jpg',
      size: 'medium',
    },
    {
      icon: Users,
      title: t.services.structuring.title,
      description: t.services.structuring.description,
      gradient: 'from-green-400 to-green-500',
      image: '/9.jpg',
      size: 'medium',
    },
    {
      icon: Scale,
      title: t.services.regulatory.title,
      description: t.services.regulatory.description,
      gradient: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      size: 'small',
    },
    {
      icon: Network,
      title: t.services.networking.title,
      description: t.services.networking.description,
      gradient: 'from-green-600 to-green-700',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      size: 'small',
    },
    {
      icon: Lightbulb,
      title: t.services.advisory.title,
      description: t.services.advisory.description,
      gradient: 'from-green-400 to-green-500',
      image: '/6.jpg',
      size: 'wide',
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Featured Service - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-6 lg:row-span-2 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all">
              {/* Background Image with Blend */}
              <div className="absolute inset-0">
                <img 
                  src={services[0].image} 
                  alt={services[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-green-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-5 bg-gradient-to-br ${services[0].gradient} rounded-2xl shadow-xl mb-6`}
                  >
                    {React.createElement(services[0].icon, { className: "w-8 h-8 text-white" })}
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {services[0].title}
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                    {services[0].description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-green-400 font-semibold group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Medium Services */}
          {services.slice(1, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="md:col-span-1 lg:col-span-3 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-green-900/70 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg w-fit`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small Services */}
          {services.slice(3, 5).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="md:col-span-1 lg:col-span-3 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-green-900/70 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg w-fit`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Wide Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2 lg:col-span-6 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative h-full min-h-[200px] lg:min-h-[240px] rounded-2xl overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={services[5].image} 
                  alt={services[5].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-green-900/70 mix-blend-multiply"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-between p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div className={`p-5 bg-gradient-to-br ${services[5].gradient} rounded-2xl shadow-xl`}>
                    {React.createElement(services[5].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {services[5].title}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base max-w-xl">
                      {services[5].description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-8 h-8 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
              </div>
            </div>
          </motion.div>
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