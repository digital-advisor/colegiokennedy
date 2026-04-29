import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingElements() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Show WhatsApp button after 3 seconds
    const waTimer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 3000);

    // Show Tooltip after 8 seconds, hide after 13
    const ttTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 8000);

    // Scroll progress
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      setScrollProgress(parseFloat(scrolled));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(waTimer);
      clearTimeout(ttTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-kennedy-gold to-kennedy-gold-dark z-[100] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}></div>

      {/* Floating WhatsApp */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-end"
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute right-full mr-4 bottom-2 bg-white text-kennedy-blue-dark px-4 py-2 rounded-xl shadow-lg border border-kennedy-gray-light whitespace-nowrap hidden sm:flex items-center"
                >
                  <span className="font-bold text-sm">Olá! Posso ajudar? 😊</span>
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-kennedy-gray-light"></div>
                  <button onClick={() => setShowTooltip(false)} className="ml-3 text-kennedy-gray-medium hover:text-kennedy-gray-dark">
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <a 
              href="https://wa.me/558532624069?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20matrículas%20no%20Colégio%20Kennedy." 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group block"
            >
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-kennedy-whatsapp rounded-full animate-ping opacity-75 duration-1000"></div>
              
              <div className="relative w-16 h-16 bg-kennedy-whatsapp rounded-full shadow-xl flex items-center justify-center transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-white fill-current" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
