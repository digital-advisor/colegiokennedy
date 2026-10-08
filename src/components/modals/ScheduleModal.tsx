import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink, Loader2, Phone, MessageCircle, ArrowRight, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScheduleModal } from '../../context/ScheduleModalContext';
import { sendLeadToGoogleSheets } from '../../config/leads';

export default function ScheduleModal() {
  const { isOpen, closeScheduleModal } = useScheduleModal();
  const [step, setStep] = useState<'lead' | 'calendar'>('lead');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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

  // Reset states when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep('lead');
      setIsLoading(true);
    }
  }, [isOpen]);

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Disparar evento de conversão para o Google Tag Manager (GTM)
    if (typeof window !== 'undefined') {
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'lead_agendamento_visita',
        event_name: 'generate_lead',
        event_category: 'Conversao',
        lead_type: 'agendamento_visita',
        lead_name: name,
        lead_phone: phone,
      });

      // Disparar evento para o Meta Ads Pixel (se inicializado via GTM ou script)
      if (typeof win.fbq === 'function') {
        win.fbq('track', 'Lead', {
          content_name: 'Agendamento de Visita',
          content_category: 'Visita Presencial',
        });
      }
    }

    // Enviar dados para a planilha Google Sheets via Apps Script Web App
    sendLeadToGoogleSheets({
      tipo: 'agendamento',
      nome: name.trim(),
      whatsapp: phone.trim(),
      origem: 'Pop-up Agendamento de Visita',
    });

    // Avança para a tela do calendário
    setStep('calendar');
  };

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
            className={`relative bg-white rounded-3xl w-full ${step === 'lead' ? 'max-w-lg' : 'max-w-4xl'} max-h-[92vh] flex flex-col shadow-2xl border border-kennedy-gray-light z-10 overflow-hidden transition-all duration-300`}
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-kennedy-blue-dark to-kennedy-blue-primary text-white flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3 pr-2">
                <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-sm shrink-0">
                  <Calendar className="w-6 h-6 text-kennedy-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl leading-tight">
                    {step === 'lead' ? 'Agende sua Visita' : 'Escolha a Data e Horário'}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {step === 'lead' 
                      ? 'Preencha seus dados para liberar a agenda oficial' 
                      : `Horários disponíveis para você, ${name.split(' ')[0]}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                {step === 'calendar' && (
                  <button
                    onClick={() => setStep('lead')}
                    className="inline-flex items-center space-x-1 text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-xl transition-all mr-1"
                    title="Alterar dados"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Dados</span>
                  </button>
                )}

                {step === 'calendar' && (
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
                )}
                
                <button
                  onClick={closeScheduleModal}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* STEP 1: Formulário de Lead Curto */}
            {step === 'lead' && (
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block bg-kennedy-gold/15 text-kennedy-gold-dark font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    Etapa 1 de 2 • Identificação
                  </span>
                  <h4 className="text-xl font-heading font-black text-kennedy-blue-dark">
                    Quem irá nos visitar?
                  </h4>
                  <p className="text-sm text-kennedy-gray-dark mt-1">
                    Informe seu nome e WhatsApp para personalizarmos seu atendimento e liberarmos a agenda do Google.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-kennedy-blue-dark uppercase tracking-wider mb-2">
                      Nome *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-kennedy-gray-dark">
                        <User className="w-5 h-5 text-kennedy-blue-primary/60" />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Como devemos chamar você?"
                        className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-slate-50 font-medium text-kennedy-blue-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-kennedy-blue-dark uppercase tracking-wider mb-2">
                      WhatsApp do Responsável *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-kennedy-gray-dark">
                        <MessageCircle className="w-5 h-5 text-kennedy-blue-primary/60" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(85) 90000-0000"
                        className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-slate-50 font-medium text-kennedy-blue-dark"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary !rounded-2xl !py-4 text-base font-bold flex items-center justify-center space-x-2 shadow-lg shadow-kennedy-blue-primary/20 cursor-pointer group"
                    >
                      <span>Avançar para Escolher Horário</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                {/* Benefícios da visita */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  <div className="flex items-center text-xs text-kennedy-gray-dark font-medium">
                    <CheckCircle2 className="w-4 h-4 text-kennedy-success mr-2 shrink-0" />
                    <span>Visita guiada por coordenadores pedagógicos</span>
                  </div>
                  <div className="flex items-center text-xs text-kennedy-gray-dark font-medium">
                    <CheckCircle2 className="w-4 h-4 text-kennedy-success mr-2 shrink-0" />
                    <span>Apresentação de turmas, estrutura e diferenciais</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Calendário do Google Agenda */}
            {step === 'calendar' && (
              <>
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
                      onClick={() => sendLeadToGoogleSheets({ tipo: 'whatsapp', origem: 'Pop-up Agendamento - Rodapé WhatsApp' })}
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
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
