import React, { useState } from 'react';
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
  Shield,
  FileText,
  Cookie,
  Lock,
  AlertCircle,
} from 'lucide-react';
import LegalModals from './legalModals';

const Footer = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { label: t.nav.home, to: 'hero' },
    { label: t.nav.about, to: 'services' },
    { label: t.nav.services, to: 'services' },
    { label: t.nav.sectors, to: 'sectors' },
    { label: t.nav.contact, to: 'cta' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', icon: Lock, modalId: 'privacy' },
    { label: 'Terms of Service', icon: FileText, modalId: 'terms' },
    { label: 'Cookie Policy', icon: Cookie, modalId: 'cookies' },
    { label: 'Compliance', icon: Shield, modalId: 'compliance' },
    { label: 'Disclaimer', icon: AlertCircle, modalId: 'disclaimer' },
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
    <footer className="relative bg-black overflow-hidden">
      {/* Background Image with Blend Mode */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/investment-bg.jpg')`, // You can use any relevant image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'luminosity',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/50 to-black opacity-95"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-600/20 to-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center">
                  <img src="/logo.png" alt="BridgeOne Logo" className="w-10 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">BridgeOne Africa</h3>
                <p className="text-green-400 text-xs">Investment Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-gray-500 text-xs uppercase tracking-wider">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg hover:bg-green-900/30 hover:border-green-500/40 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></span>
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
                    <span className="w-0 h-0.5 bg-green-500 group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></span>
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:invest@bridgeoneafrica.com"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-start space-x-3 group"
                >
                  <div className="p-2 bg-green-900/20 border border-green-500/20 rounded-lg group-hover:bg-green-900/30 transition-all">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
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
                  <div className="p-2 bg-green-900/20 border border-green-500/20 rounded-lg group-hover:bg-green-900/30 transition-all">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.phone}</div>
                    <div className="group-hover:text-green-400 transition-colors">
                      +263 XXX XXX XXX
                    </div>
                  </div>
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start space-x-3">
                <div className="p-2 bg-green-900/20 border border-green-500/20 rounded-lg">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-1">{t.footer.address}</div>
                  <div>Harare, Zimbabwe</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></span>
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for investment insights and opportunities.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg text-white text-sm placeholder-gray-500 focus:border-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                Subscribe Now
              </motion.button>
            </form>
            
            {/* Trust Indicators */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-green-500/10 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Your data is secure and protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mt-16 pt-8 border-t border-green-500/10">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {legalLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveModal(link.modalId)}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-green-500/10 rounded-lg hover:bg-white/10 hover:border-green-500/30 transition-all group cursor-pointer"
              >
                <link.icon className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-white text-sm transition-colors">
                  {link.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-green-500/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <p className="text-gray-500 text-sm">
                {t.footer.rights}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <span className="px-2 py-1 bg-green-900/20 border border-green-500/20 rounded">
                  Est. 2024
                </span>
                <span>•</span>
                <span className="px-2 py-1 bg-green-900/20 border border-green-500/20 rounded">
                  Zimbabwe
                </span>
              </div>
            </div>
            
            {/* Certifications / Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SEC Regulated</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Lock className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all z-40 border border-green-400/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl"></div>

      {/* Legal Modals */}
      <LegalModals activeModal={activeModal} setActiveModal={setActiveModal} />
    </footer>
  );
};

export default Footer;