import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink, Loader2, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScheduleModal } from '../../context/ScheduleModalContext';

export default function ScheduleModal() {
  const { isOpen, closeScheduleModal } = useScheduleModal();
  const [isLoading, setIsLoading] = useState(true);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeScheduleModal();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeScheduleModal]);

  // Reset loading state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  const scheduleUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1deVUkhw9opboEhncoWE7pvZlzPWeLmysrsls2xtgY25tq9T8ex2JtjqbKsuEVcbvIqS_17IWt";
  const directLink = "https://calendar.app.google/xgsHGme9DoV1DZ2L6";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeScheduleModal}
            className="fixed inset-0 bg-kennedy-blue-dark/80 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-kennedy-gray-light z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-kennedy-blue-dark to-kennedy-blue-primary text-white flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3 pr-2">
                <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-sm shrink-0">
                  <Calendar className="w-6 h-6 text-kennedy-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl leading-tight">
                    Agende sua Visita
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Escolha o melhor dia e horário para conhecer o Colégio Kennedy
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <a
                  href={directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center space-x-1 text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition-all border border-white/10"
                  title="Abrir em nova aba"
                >
                  <span>Nova aba</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={closeScheduleModal}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content / Iframe */}
            <div className="relative flex-1 min-h-[480px] sm:min-h-[560px] md:min-h-[620px] bg-slate-50 overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
                  <Loader2 className="w-10 h-10 text-kennedy-blue-primary animate-spin mb-3" />
                  <p className="text-kennedy-blue-dark font-medium text-sm">Carregando calendário do Google...</p>
                  <p className="text-kennedy-gray-dark text-xs mt-1">Isso levará apenas alguns segundos</p>
                </div>
              )}
              <iframe
                src={scheduleUrl}
                title="Agendamento de Visita - Colégio Kennedy"
                className="w-full h-full border-0 min-h-[480px] sm:min-h-[560px] md:min-h-[620px]"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* Footer with contacts fallback */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-kennedy-gray-dark gap-2 shrink-0">
              <span className="text-center sm:text-left">
                Dúvidas ou prefere agendar por mensagem ou ligação?
              </span>
              <div className="flex items-center space-x-3 flex-wrap justify-center">
                <a
                  href="tel:+558532624069"
                  className="inline-flex items-center text-kennedy-blue-dark hover:text-kennedy-gold font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  (85) 3262-4069
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://api.whatsapp.com/send?phone=558596505001&text=Ol%C3%A1!%20Vim%20do%20site%20do%20Col%C3%A9gio%20Kennedy%20e%20gostaria%20de%20agendar%20uma%20visita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-kennedy-blue-primary hover:text-kennedy-gold font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1" />
                  WhatsApp
                </a>
                <span className="text-slate-300 sm:inline hidden">•</span>
                <a
                  href={directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:inline-flex hidden items-center text-slate-500 hover:text-kennedy-blue-dark underline"
                >
                  Abrir link direto
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
