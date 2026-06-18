import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Quais são os horários de aula?",
    answer: "A Educação Infantil e o Ensino Fundamental I funcionam no turno da tarde (13h às 17h30) ou manhã (7h10 às 11h40). O Ensino Fundamental II tem aulas preferencialmente pela manhã (7h10 às 12h30). O Tempo Integral funciona das 7h às 18h."
  },
  {
    question: "Qual a faixa etária atendida?",
    answer: "Atendemos crianças a partir de 2 anos (Infantil 2) até adolescentes de 14 anos (9º Ano do Ensino Fundamental)."
  },
  {
    question: "O colégio oferece tempo integral?",
    answer: "Sim! Oferecemos o Sistema de Tempo Integral, que proporciona uma rotina equilibrada com almoço, descanso, acompanhamento de tarefas (estudo dirigido) e atividades extracurriculares diferenciadas como esportes e artes."
  },
  {
    question: "Como funciona o processo de matrícula?",
    answer: "O primeiro passo é agendar uma visita pelo WhatsApp ou pelo site. Após conhecer a escola e a proposta pedagógica, você fará uma reserva de vaga e entregará a documentação necessária na secretaria."
  },
  {
    question: "Há desconto para irmãos?",
    answer: "Sim, famílias com mais de um filho matriculado recebem condições especiais nas mensalidades. Entre em contato com nosso setor financeiro para detalhamento dos descontos progressivos."
  },
  {
    question: "Qual o sistema de ensino utilizado?",
    answer: "Utilizamos o Sistema Farias Brito, reconhecido nacionalmente pela sua excelência acadêmica. Além disso, incorporamos a Escola da Inteligência para o desenvolvimento socioemocional."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-kennedy-blue-pale/30 border-t border-kennedy-blue-light/10">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Perguntas Frequentes</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Tire suas dúvidas sobre o Colégio Kennedy. Se precisar, nossa equipe está pronta para atender você no WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-kennedy-gold shadow-md' : 'border-kennedy-gray-light hover:border-kennedy-blue-pale'}`}
              >
                <button
                  className="w-full text-left px-6 lg:px-8 py-6 flex items-center justify-between"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-kennedy-blue-primary' : 'text-kennedy-blue-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-kennedy-gold text-white rotate-180' : 'bg-kennedy-blue-pale text-kennedy-blue-primary'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 text-kennedy-gray-dark font-body leading-relaxed border-t border-gray-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
