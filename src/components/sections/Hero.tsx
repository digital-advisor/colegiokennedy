import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare } from 'lucide-react';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import { sendLeadToGoogleSheets } from '../../config/leads';

export default function Hero() {
  const { openScheduleModal } = useScheduleModal();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-kennedy-blue-dark">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://drive.google.com/thumbnail?id=1lHB1oJM0R9_RsrTmNTv5oMs_0BVj1dp9&sz=w2000" 
          alt="Crianças sorrindo na escola" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kennedy-blue-dark/90 via-kennedy-blue-primary/70 to-kennedy-blue-light/30 mix-blend-multiply"></div>
      </div>

      {/* Floating Particles (Simple CSS implementation) */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-kennedy-gold rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <div className="bg-kennedy-gold text-kennedy-blue-dark font-bold px-4 py-1 rounded-full text-sm flex items-center space-x-2">
              <span>⭐</span>
              <span>70 Anos de Tradição</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-title"
          >
            EDUCAÇÃO <span className="font-accent italic text-kennedy-gold font-medium lowercase">que</span> TRANSFORMA
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl font-body mb-10 text-white/90 max-w-2xl leading-relaxed"
          >
            Acolher com carinho, educar com propósito e orientar com firmeza. Uma tradição construída dia após dia em Fortaleza.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={openScheduleModal}
              className="btn-primary group inline-flex items-center cursor-pointer"
            >
              <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Agende sua Visita
            </button>
            <a 
              href="https://api.whatsapp.com/send?phone=558596505001&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Col%C3%A9gio%20Kennedy%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20matr%C3%ADculas%20e%20vagas." 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => sendLeadToGoogleSheets({ tipo: 'whatsapp', origem: 'Hero - Fazer Matrícula' })}
              className="btn-outline group inline-flex items-center"
            >
              <MessageSquare className="mr-2 w-5 h-5 group-hover:-rotate-12 transition-transform" />
              Fazer Matrícula
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl border-t border-white/20 pt-8"
        >
          <div>
            <div className="font-heading font-black text-3xl md:text-4xl text-kennedy-gold mb-1">70+</div>
            <div className="text-sm uppercase tracking-wider text-white/70 font-semibold">Anos de Tradição</div>
          </div>
          <div>
            <div className="font-heading font-black text-3xl md:text-4xl text-kennedy-gold mb-1">2k+</div>
            <div className="text-sm uppercase tracking-wider text-white/70 font-semibold">Alunos Formados</div>
          </div>
          <div className="hidden md:block">
            <div className="font-heading font-black text-3xl md:text-4xl text-kennedy-gold mb-1">98%</div>
            <div className="text-sm uppercase tracking-wider text-white/70 font-semibold">Satisfação</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2 font-semibold">Role para descobrir</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-kennedy-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
