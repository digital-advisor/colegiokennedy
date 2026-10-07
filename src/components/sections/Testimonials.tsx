import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Instagram, PlayCircle, X } from 'lucide-react';
import { useScheduleModal } from '../../context/ScheduleModalContext';

const testimonials = [
  {
    author: "@raymg26_",
    role: "Mãe de aluna",
    text: "Obrigada por cuidarem do meu bem mais precioso como se fosse de vocês e por acolher tantas famílias com amor, cuidado e zelo! Kennedy tem meu coração.",
  },
  {
    author: "@familiasilva",
    role: "Pais de alunos — Fund. I",
    text: "Escola maravilhosa! Ensino forte, professores super dedicados e uma direção que realmente se importa com os alunos. Meu filho ama estudar aí.",
  },
  {
    author: "@paola_lima",
    role: "Mãe de aluno — Infantil 3",
    text: "Não poderíamos ter escolhido lugar melhor. A evolução do meu filho foi notável em poucos meses. O acolhimento dessa equipe é surreal!",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { openScheduleModal } = useScheduleModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-kennedy-blue-dark relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-kennedy-gold font-accent">
        <div className="absolute -top-10 -left-10 text-[30rem] leading-none">"</div>
        <div className="absolute bottom-20 -right-20 text-[30rem] leading-none">"</div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-white/10 text-kennedy-gold font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full mb-4">
            O que as famílias dizem
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
            Nada nos enche mais de orgulho do que ouvir quem confia em nós
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Main Video Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="relative w-full max-w-md aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group cursor-pointer"
            >
              <img 
                src="https://drive.google.com/thumbnail?id=1OtvY4d81azV-skBnUlqKOCy_j9mSsu4X&sz=w1000" 
                alt="Depoimento da Família" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-full border-2 border-kennedy-gold overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold leading-tight">Mãe da aluna Eloa</h4>
                    <span className="text-kennedy-gold text-sm font-semibold">Infantil 5</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm font-accent italic">
                  "Sou apaixonada pelo ensino, metodologia e profissionais que compõem essa escola do coração!"
                </p>
                <div className="mt-4 flex items-center space-x-1 text-white/60 text-xs uppercase tracking-wider">
                  <Instagram className="w-4 h-4 mr-1 text-white/60" />
                  <span className="text-white/60">Assista ao vídeo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            {/* Carousel */}
            <div className="relative min-h-[250px] bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-kennedy-gold">
              <div className="flex text-kennedy-gold mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-6 h-6" />)}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-xl md:text-2xl font-body text-kennedy-blue-dark leading-relaxed font-medium mb-8">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <cite className="not-italic font-bold text-lg text-kennedy-blue-primary block">{testimonials[currentIndex].author}</cite>
                      <span className="text-sm text-kennedy-gray-dark">{testimonials[currentIndex].role}</span>
                    </div>
                    <div className="bg-kennedy-blue-pale text-kennedy-blue-primary text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Instagram className="w-4 h-4 mr-1" />
                      Instagram
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-kennedy-gold scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-white/20">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-white font-bold text-xl mb-1">+4.700 seguidores</h3>
                <p className="text-white/80 text-sm">Acompanham nosso dia a dia</p>
              </div>
              <a href="https://instagram.com/colegiokennedyoficial" target="_blank" rel="noopener noreferrer" className="btn-outline !py-3 !px-6 border-kennedy-gold text-kennedy-gold hover:bg-kennedy-gold hover:text-kennedy-blue-dark rounded-full flex items-center whitespace-nowrap">
                <Instagram className="mr-2" />
                Siga nosso perfil
              </a>
            </div>
            
            <div className="pt-4 text-center lg:text-left">
               <button 
                 onClick={openScheduleModal}
                 className="btn-primary w-full sm:w-auto shadow-[0_0_20px_rgba(249,168,37,0.2)] inline-block text-center cursor-pointer"
               >
                  Venha conhecer pessoalmente. Agende sua visita! →
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-sm aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Fechar vídeo"
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe
                src="https://drive.google.com/file/d/1fDxKTV0IREC2acVBxiBvXAbOOShYWWu_/preview"
                title="Depoimento Família Kennedy"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
