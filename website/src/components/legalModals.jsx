import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Cookie, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const LegalModals = ({ activeModal, setActiveModal }) => {
  const closeModal = () => setActiveModal(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalContent = {
    privacy: {
      icon: Lock,
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Information We Collect',
          content: `We collect information you provide directly to us, including name, email address, phone number, and investment preferences. We also automatically collect certain information about your device when you use our services, including IP address, browser type, and usage data.`
        },
        {
          heading: 'How We Use Your Information',
          content: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products, services, and events.`
        },
        {
          heading: 'Information Sharing',
          content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.`
        },
        {
          heading: 'Data Security',
          content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`
        },
        {
          heading: 'Your Rights',
          content: `You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@bridgeoneafrica.com.`
        },
        {
          heading: 'Changes to This Policy',
          content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
        }
      ],
      lastUpdated: 'November 11, 2025'
    },
    terms: {
      icon: FileText,
      title: 'Terms of Service',
      sections: [
        {
          heading: 'Acceptance of Terms',
          content: `By accessing and using BridgeOne Africa's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
        },
        {
          heading: 'Use of Services',
          content: `You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that violates any applicable local, national, or international law or regulation.`
        },
        {
          heading: 'Investment Disclaimer',
          content: `Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions.`
        },
        {
          heading: 'Intellectual Property',
          content: `All content, features, and functionality of our services are owned by BridgeOne Africa and are protected by international copyright, trademark, and other intellectual property laws.`
        },
        {
          heading: 'Limitation of Liability',
          content: `To the fullest extent permitted by law, BridgeOne Africa shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.`
        },
        {
          heading: 'Governing Law',
          content: `These Terms shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions.`
        },
        {
          heading: 'Termination',
          content: `We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.`
        }
      ],
      lastUpdated: 'November 11, 2025'
    },
    cookies: {
      icon: Cookie,
      title: 'Cookie Policy',
      sections: [
        {
          heading: 'What Are Cookies',
          content: `Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.`
        },
        {
          heading: 'Types of Cookies We Use',
          content: `We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device). These include essential cookies, performance cookies, functionality cookies, and targeting cookies.`
        },
        {
          heading: 'Essential Cookies',
          content: `These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.`
        },
        {
          heading: 'Performance Cookies',
          content: `These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.`
        },
        {
          heading: 'Functionality Cookies',
          content: `These cookies enable our website to remember your preferences and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we use.`
        },
        {
          heading: 'Managing Cookies',
          content: `You can control and manage cookies through your browser settings. However, please note that removing or blocking cookies may impact your user experience and some parts of our website may no longer be fully accessible.`
        },
        {
          heading: 'Third-Party Cookies',
          content: `We may use third-party services such as Google Analytics that also set cookies. These services have their own privacy policies and cookie policies.`
        }
      ],
      lastUpdated: 'November 11, 2025'
    },
    compliance: {
      icon: Shield,
      title: 'Compliance & Regulation',
      sections: [
        {
          heading: 'Regulatory Framework',
          content: `BridgeOne Africa operates in full compliance with the Securities and Exchange Commission of Zimbabwe (SECZ) regulations and all applicable financial services laws in our operating jurisdictions.`
        },
        {
          heading: 'Licensing & Registration',
          content: `We maintain all necessary licenses and registrations required to provide investment advisory and wealth management services. Our operations are regularly audited to ensure compliance with regulatory standards.`
        },
        {
          heading: 'Anti-Money Laundering (AML)',
          content: `We have implemented comprehensive AML procedures in accordance with international standards. All clients are subject to Know Your Customer (KYC) verification processes to prevent money laundering and terrorist financing.`
        },
        {
          heading: 'Data Protection Compliance',
          content: `We comply with applicable data protection regulations including GDPR where applicable. We are committed to protecting your personal information and respecting your privacy rights.`
        },
        {
          heading: 'Investor Protection',
          content: `Client funds are held in segregated accounts with reputable financial institutions. We maintain professional indemnity insurance and participate in applicable investor compensation schemes.`
        },
        {
          heading: 'Transparency & Reporting',
          content: `We provide regular reporting to clients and regulatory authorities as required. Our financial statements are audited annually by independent certified public accountants.`
        },
        {
          heading: 'Conflict of Interest',
          content: `We maintain a robust conflicts of interest policy and ensure that client interests always take priority. All potential conflicts are disclosed to clients in advance.`
        },
        {
          heading: 'Continuous Compliance',
          content: `Our compliance team monitors regulatory changes and updates our policies and procedures accordingly. We provide ongoing training to all staff on compliance matters.`
        }
      ],
      lastUpdated: 'November 11, 2025'
    },
    disclaimer: {
      icon: AlertCircle,
      title: 'Investment Disclaimer',
      sections: [
        {
          heading: 'General Disclaimer',
          content: `The information provided by BridgeOne Africa is for general informational purposes only. All information on our website and through our services is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.`
        },
        {
          heading: 'Not Financial Advice',
          content: `Nothing on our website or in our communications constitutes professional financial advice. The content is not intended to be a substitute for professional financial advice, and you should not rely solely on the information provided when making investment decisions.`
        },
        {
          heading: 'Investment Risks',
          content: `All investments carry risk, and past performance is not indicative of future results. The value of investments can go down as well as up, and you may not get back the amount you invested. You should carefully consider whether investing is appropriate for you in light of your financial circumstances.`
        },
        {
          heading: 'Market Volatility',
          content: `Financial markets are subject to volatility and can be affected by numerous factors including political events, economic conditions, and market sentiment. BridgeOne Africa cannot predict or guarantee investment outcomes.`
        },
        {
          heading: 'No Guarantee of Returns',
          content: `We do not guarantee any specific returns or profits from investments. Any projections, estimates, or forecasts provided are based on assumptions and may not materialize. Actual results may differ materially from projected results.`
        },
        {
          heading: 'Third-Party Information',
          content: `Our website may contain links to third-party websites or information. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`
        },
        {
          heading: 'Professional Advice',
          content: `Before making any investment decisions, you should consult with qualified financial, legal, and tax advisors. You should not act or refrain from acting on the basis of any content on our website without seeking professional advice.`
        },
        {
          heading: 'Limitation of Liability',
          content: `Under no circumstances shall BridgeOne Africa be liable for any loss or damage of any kind incurred as a result of the use of our website or services, or reliance on any information provided. Your use of our services is at your own risk.`
        }
      ],
      lastUpdated: 'November 11, 2025'
    }
  };

  const currentModal = activeModal ? modalContent[activeModal] : null;
  const IconComponent = currentModal ? currentModal.icon : null;

  return (
    <AnimatePresence>
      {activeModal && currentModal && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl shadow-2xl shadow-green-500/10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-black/95 backdrop-blur-lg border-b border-green-500/20 px-6 py-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-900/30 border border-green-500/30 rounded-lg">
                        {IconComponent && <IconComponent className="w-5 h-5 text-green-400" />}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{currentModal.title}</h2>
                        <p className="text-xs text-gray-500 mt-1">
                          Last Updated: {currentModal.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={closeModal}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-green-900/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-400 hover:text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                  <div className="space-y-6">
                    {currentModal.sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                              {section.heading}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                              {section.content}
                            </p>
                          </div>
                        </div>
                        {index < currentModal.sections.length - 1 && (
                          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer Note */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-4 bg-green-900/10 border border-green-500/20 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">
                          <span className="text-green-400 font-semibold">Important:</span> If you have any questions about this policy, please contact us at{' '}
                          <a href="mailto:legal@bridgeoneafrica.com" className="text-green-400 hover:text-green-300 underline">
                            legal@bridgeoneafrica.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer Actions */}
                <div className="sticky bottom-0 bg-black/95 backdrop-blur-lg border-t border-green-500/20 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      © 2024 BridgeOne Africa. All rights reserved.
                    </p>
                    <motion.button
                      onClick={closeModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LegalModals;