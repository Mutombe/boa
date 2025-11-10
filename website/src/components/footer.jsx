import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './Languagecontext';
import { Link } from 'react-scroll';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, to: 'hero' },
    { label: t.nav.about, to: 'services' },
    { label: t.nav.services, to: 'services' },
    { label: t.nav.sectors, to: 'sectors' },
    { label: t.nav.contact, to: 'cta' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-green-900/20 ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B1</span>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">BridgeOne</div>
                <div className="text-green-500 text-xs tracking-wider">AFRICA</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-green-900/20 border border-green-500/20 rounded-lg hover:bg-green-900/30 hover:border-green-500/40 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-green-500 group-hover:w-4 transition-all"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:invest@bridgeoneafrica.com"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-start space-x-3 group"
                >
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.email}</div>
                    <div className="group-hover:text-green-400 transition-colors">
                      invest@bridgeoneafrica.com
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+263XXXXXXXXX"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-start space-x-3 group"
                >
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.phone}</div>
                    <div className="group-hover:text-green-400 transition-colors">
                      +263 XXX XXX XXX
                    </div>
                  </div>
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500 text-xs mb-1">{t.footer.address}</div>
                  <div>Harare, Zimbabwe</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for investment insights and opportunities.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-black/50 border border-green-500/20 rounded-lg text-white text-sm placeholder-gray-500 focus:border-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;