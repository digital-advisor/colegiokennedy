import React from 'react';
import { Bell, Calendar, Book, Clock, Phone, Smartphone } from 'lucide-react';

const notices = [
  { date: '28 Abr', title: 'Reunião de Pais e Mestres', desc: 'Confira os horários para o Ensino Fundamental.', isNew: true },
  { date: '25 Abr', title: 'Festa da Família 2026', desc: 'Garanta o seu ingresso na secretaria.', isNew: true },
  { date: '20 Abr', title: 'Cardápio - Maio', desc: 'O cardápio atualizado já está disponível.', isNew: false },
  { date: '15 Abr', title: 'Aviso de Feriado', desc: 'Não haverá aula na próxima sexta-feira.', isNew: false }
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
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-kennedy-gray-light">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-heading font-bold text-kennedy-blue-dark flex items-center">
                <Bell className="w-6 h-6 mr-3 text-kennedy-gold" />
                Avisos e Comunicados
              </h3>
            </div>

            <div className="space-y-4 mb-8">
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
            <a href="#" className="text-kennedy-blue-primary font-bold hover:underline">Ver todos os avisos →</a>
          </div>

          {/* Quick Links & App */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Links */}
            <div className="bg-kennedy-blue-dark text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-6">Acesso Rápido</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-center group">
                  <Calendar className="w-8 h-8 mb-3 text-kennedy-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">Calendário Escolar</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-center group">
                  <Book className="w-8 h-8 mb-3 text-kennedy-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">Lista de Material</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-center group">
                  <Clock className="w-8 h-8 mb-3 text-kennedy-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">Horário das Aulas</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-center group">
                  <Phone className="w-8 h-8 mb-3 text-kennedy-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">Atendimento</span>
                </a>
              </div>
            </div>

            {/* App Banner */}
            <div className="bg-gradient-to-r from-kennedy-blue-primary to-kennedy-blue-medium rounded-3xl p-8 text-white relative overflow-hidden flex items-center justify-between shadow-lg">
              <div className="relative z-10 w-2/3">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 mr-2 text-kennedy-gold" />
                  <h3 className="text-xl font-heading font-bold">Portal do Aluno</h3>
                </div>
                <p className="text-sm text-white/80 mb-6">
                  Consulte notas, frequência, boletos e recados diretamente pelo celular.
                </p>
                <a href="#" className="bg-white text-kennedy-blue-dark font-bold text-sm px-6 py-2.5 rounded-full hover:bg-kennedy-gold transition-colors inline-block">
                  Acessar Portal
                </a>
              </div>
              <div className="absolute right-[-40px] bottom-[-40px] opacity-20">
                <Smartphone className="w-48 h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
