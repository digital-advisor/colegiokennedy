import React from 'react';
import { Bell, Calendar, Book, Clock, Phone, Smartphone, MessageCircle } from 'lucide-react';

const notices = [
  { date: '20 Jun', title: 'Festa Junina Kennedy', desc: 'Venha celebrar conosco! Comidas típicas, apresentações e muita diversão com nossa comunidade.', isNew: true },
  { date: '26 Jun', title: 'Férias de Junho - Fundamental 2', desc: 'Último dia de aula e início do recesso escolar para as turmas do Ensino Fundamental II.', isNew: true },
  { date: '30 Jun', title: 'Férias de Junho - Infantil e Fund. 1', desc: 'Último dia de aula e início do recesso escolar para a Educação Infantil e Ensino Fundamental I.', isNew: true },
  { date: '03 Ago', title: 'Início das Aulas (Agosto)', desc: 'Retorno das aulas do segundo semestre para todos os segmentos: Educação Infantil, Fundamental 1 e Fundamental 2.', isNew: false }
];

export default function FamilyPortal() {
  return (
    <section id="familias" className="py-24 bg-kennedy-gray-light">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Para Famílias Kennedy</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Fique por dentro de tudo que acontece na escola e acompanhe a vida escolar do seu filho.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Notices Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-kennedy-gray-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-heading font-bold text-kennedy-blue-dark flex items-center">
                  <Bell className="w-6 h-6 mr-3 text-kennedy-gold" />
                  Avisos e Comunicados
                </h3>
              </div>

              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl hover:bg-kennedy-gray-light transition-colors border border-transparent hover:border-kennedy-blue-pale">
                    <div className="flex flex-col items-center justify-center bg-kennedy-blue-pale text-kennedy-blue-primary rounded-lg p-2 min-w-[70px] shrink-0 text-center">
                      <span className="font-bold text-xl leading-none">{notice.date.split(' ')[0]}</span>
                      <span className="text-xs font-semibold uppercase">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-kennedy-blue-dark text-lg">{notice.title}</h4>
                        {notice.isNew && (
                          <span className="bg-kennedy-warning text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full animate-pulse">Novo</span>
                        )}
                      </div>
                      <p className="text-sm text-kennedy-gray-dark">{notice.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Community & App */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Community Invitation */}
            <div className="bg-kennedy-blue-dark text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 mr-3 text-emerald-400" />
                  <h3 className="text-2xl font-heading font-bold">Comunidade de Avisos</h3>
                </div>
                <p className="text-sm text-white/85 mb-6 leading-relaxed">
                  Convidamos os pais e responsáveis a entrarem no nosso grupo oficial do WhatsApp. Receba alertas imediatos, notícias e comunicados importantes diretamente no seu celular de forma prática e rápida.
                </p>
                <a 
                  href="https://chat.whatsapp.com/Ehl4vOZC7joIycS7bHpdmq" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto inline-flex"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Entrar na Comunidade do WhatsApp
                </a>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                <MessageCircle className="w-40 h-40" />
              </div>
            </div>

            {/* App Banner */}
            <div className="bg-gradient-to-r from-kennedy-blue-primary to-kennedy-blue-medium rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg min-h-[220px]">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 mr-2 text-kennedy-gold" />
                  <h3 className="text-xl font-heading font-bold">Portal do Aluno</h3>
                </div>
                <p className="text-sm text-white/85 mb-6">
                  Consulte notas, frequência, boletos e recados diretamente pelo celular ou computador.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#" 
                    className="bg-white text-kennedy-blue-dark font-bold text-sm px-6 py-2.5 rounded-full hover:bg-kennedy-gold transition-colors text-center inline-block"
                  >
                    Acessar Portal
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=558586679136&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-transparent border border-white hover:bg-white hover:text-kennedy-blue-dark text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all text-center inline-block"
                  >
                    Contato Secretaria (Veterano)
                  </a>
                </div>
              </div>
              <div className="absolute right-[-40px] bottom-[-40px] opacity-20 pointer-events-none">
                <Smartphone className="w-48 h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
