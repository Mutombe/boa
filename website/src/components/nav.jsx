import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from './Languagecontext';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setLangDropdown(false); // Close language dropdown when menu opens
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'nd', name: 'Ndebele', flag: '🇿🇼' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navItems = [
    { label: t.nav.home, to: 'hero' },
    { label: t.nav.about, to: 'services' },
    { label: t.nav.services, to: 'services' },
    { label: t.nav.sectors, to: 'sectors' },
    { label: t.nav.contact, to: 'cta' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-green-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 relative z-50"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 blur-xl"></div>
                <div className="relative flex items-center justify-center w-30 h-13">
                  <img src="/logo.png" alt="BridgeOne Logo" className="w-30 h-13" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-300 hover:text-green-500 cursor-pointer transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center space-x-2 text-gray-300 hover:text-green-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(l => l.code === language)?.name}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-gray-900 border border-green-900/20 rounded-lg shadow-lg overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setLangDropdown(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm flex items-center space-x-2 transition-colors ${
                          language === lang.code
                            ? 'bg-green-900/30 text-green-500'
                            : 'text-gray-300 hover:bg-green-900/10'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="cta"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow"
              >
                {t.nav.contact}
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4 relative z-50">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="text-gray-300 hover:text-green-500"
            >
              <Globe className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Dropdown */}
      <AnimatePresence>
        {langDropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-green-900/20 relative z-50"
          >
            <div className="px-4 py-2 space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setLangDropdown(false);
                  }}
                  className={`w-full px-4 py-2 text-left rounded-lg flex items-center space-x-2 transition-colors ${
                    language === lang.code
                      ? 'bg-green-900/30 text-green-500'
                      : 'text-gray-300 hover:bg-green-900/10'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-black/95 via-green-950/95 to-black/95 backdrop-blur-lg"
          >
            {/* Background overlay for depth */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Navigation Content */}
            <div className="relative h-full flex flex-col">
              {/* Header space to account for the fixed navbar */}
              <div className="h-20"></div>
              
              {/* Main Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-6 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm border border-green-500/20 bg-white/5 hover:bg-green-900/20 hover:border-green-500/40 cursor-pointer group"
                      >
                        <span className="text-xl font-medium text-white group-hover:text-green-400 transition-colors">
                          {item.label}
                        </span>
                        <motion.div
                          className="text-green-500 group-hover:text-green-400"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                          →
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (navItems.length + 1) }}
                  >
                    <Link
                      to="cta"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-2 px-6 py-4 text-xl bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow"
                      >
                        {t.nav.contact}
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-6 pb-8"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
                  {/* Company Info */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">BridgeOne Africa</h3>
                        <p className="text-xs text-gray-400 tracking-wider">Investment Solutions</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2 text-green-400">
                      <Globe className="h-4 w-4" />
                      <span className="text-gray-300">Global Reach</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-400">
                      <span className="text-2xl">💎</span>
                      <span className="text-gray-300">Premium Service</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;