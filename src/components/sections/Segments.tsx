import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const segmentsData = [
  {
    id: 'infantil',
    name: 'Educação Infantil',
    age: '2 a 5 anos',
    title: 'Onde a magia de aprender começa',
    desc: 'Um ambiente seguro, estimulante e cheio de afeto, projetado para desenvolver as habilidades motoras, cognitivas e socioemocionais dos pequenos. No Infantil do Kennedy, utilizamos o renomado Sistema de Ensino Ari de Sá (SAS), onde brincar é coisa séria e aprender é uma aventura.',
    features: ['Turmas reduzidas', 'Psicomotricidade', 'Iniciação Musical', 'Parque e áreas de convivência'],
    imgMain: 'https://drive.google.com/thumbnail?id=1bbCyQUM9oq6i1lz_KUzQmJyOA3l0WS4G&sz=w1000',
    imgSub: 'https://drive.google.com/thumbnail?id=1CsKCu6LRCoYpety8IG3s4Wf8DoIoQE3O&sz=w600',
    badge: 'Infantil 1 ao 5',
    hasPartnerLogo: true,
    partnerLogo: 'https://drive.google.com/thumbnail?id=1Mz8j-aAw7SYkyfmmdUsWXwqxO0--an-Z&sz=w300',
    partnerTitle: 'Parceiro Sistema SAS',
    partnerDesc: 'Utilizamos os materiais integrados e a metodologia de excelência do Sistema de Ensino Ari de Sá (SAS).',
    hasHighlightLink: false,
    highlightLinkLabel: ''
  },
  {
    id: 'fund1',
    name: 'Ensino F. I',
    age: '6 a 10 anos',
    title: 'Construindo bases sólidas',
    desc: 'Desenvolvemos a autonomia e o amor pelo aprendizado. Nossa abordagem interdisciplinar incentiva a curiosidade, a liderança e o pensamento crítico desde os primeiros anos acadêmicos.',
    features: ['Projetos e eventos', 'Esportes inclusivos', 'Salas climatizadas e interativas'],
    imgMain: 'https://drive.google.com/thumbnail?id=1Sa-lkyJE5ccRjQYi5hDTsc5cw40uJcBB&sz=w1000',
    imgSub: 'https://drive.google.com/thumbnail?id=12jZmDMwlga8zhAeJL80sxQgVV2C4ksQv&sz=w600',
    badge: '1º ao 5º Ano',
    hasPartnerLogo: false,
    partnerLogo: '',
    partnerTitle: '',
    partnerDesc: '',
    hasHighlightLink: true,
    highlightLinkLabel: 'Conheça nossos projetos >'
  },
  {
    id: 'fund2',
    name: 'Ensino F. II',
    age: '11 a 14 anos',
    title: 'Preparação para grandes voos',
    desc: 'Guiamos os adolescentes em suas descobertas com uma matriz curricular forte e atual. Focamos no desenvolvimento de habilidades socioemocionais essenciais para os desafios da vida.',
    features: ['Corpo docente especialista', 'Empreendedorismo', 'Apoio psicopedagógico'],
    imgMain: 'https://drive.google.com/thumbnail?id=1xfFXv7EsxlT0nCXGRwi1Uqkl6TycnGFY&sz=w1000',
    imgSub: 'https://drive.google.com/thumbnail?id=1I2K8PpLawI1bf26gUdV0WPBPqOFsIAu4&sz=w600',
    badge: '6º ao 9º Ano',
    hasPartnerLogo: true,
    partnerLogo: 'https://drive.google.com/thumbnail?id=1WUhCgA0kgikk3U7Bt83cFso5d1-DYQZd&sz=w300',
    partnerTitle: 'Parceiro Sistema Farias Brito',
    partnerDesc: 'Utilizamos os materiais integrados e a metodologia de excelência do Sistema Farias Brito de Ensino.',
    hasHighlightLink: false,
    highlightLinkLabel: ''
  },
  {
    id: 'integral',
    name: 'Tempo Integral',
    age: 'Opcional',
    title: 'A escola como extensão de casa',
    desc: 'O Sistema de Tempo Integral do Kennedy oferece conforto, segurança e uma rotina equilibrada com almoço, descanso, acompanhamento de tarefas, esportes e atividades extracurriculares diferenciadas.',
    features: ['Nutrição balanceada', 'Estudo Dirigido', 'Oficinas de Arte', 'Tempo livre para aproveitar seus filhos em casa', 'Acolhimento contínuo'],
    imgMain: 'https://drive.google.com/thumbnail?id=1dQHiKwD3xE3Ex5RcmXmsGKaJSu-MMyZs&sz=w1000',
    imgSub: 'https://drive.google.com/thumbnail?id=1ksX2bupW7XjmTp5TE5sHU0THZqYv4GCp&sz=w600',
    badge: 'Nova Estrutura!',
    hasPartnerLogo: false,
    partnerLogo: '',
    partnerTitle: '',
    partnerDesc: '',
    hasHighlightLink: true,
    highlightLinkLabel: 'Conheça nossa Rotina >'
  }
];

export default function Segments() {
  const [activeSegment, setActiveSegment] = useState(segmentsData[0].id);

  const activeData = segmentsData.find(s => s.id === activeSegment)!;

  return (
    <section id="ensino" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Nossos Segmentos</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Cada fase com o cuidado que merece</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Do Infantil ao Fundamental, acompanhamos cada etapa do desenvolvimento do seu filho com metodologia forte e acolhimento.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto snap-x hide-scrollbar mb-12 gap-4 pb-4 justify-start lg:justify-center">
          {segmentsData.map(segment => (
            <button
              key={segment.id}
              onClick={() => setActiveSegment(segment.id)}
              className={`snap-center shrink-0 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 border-2 
                ${activeSegment === segment.id 
                  ? 'bg-kennedy-blue-dark text-white border-kennedy-blue-dark shadow-md' 
                  : 'bg-white text-kennedy-gray-dark border-kennedy-gray-light hover:border-kennedy-blue-light hover:text-kennedy-blue-primary'}`}
            >
              {segment.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Text Info */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-kennedy-gold-light text-kennedy-gold-dark font-bold rounded-full text-sm mb-6">
                  {activeData.age}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-kennedy-blue-dark mb-4">
                  {activeData.title}
                </h3>
                <p className="text-lg text-kennedy-gray-dark mb-8 leading-relaxed">
                  {activeData.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {activeData.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-kennedy-blue-dark font-medium">
                      <CheckCircle2 className="w-5 h-5 text-kennedy-success mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {activeData.hasHighlightLink && (
                  <div className="mt-6 mb-8">
                    <a 
                      href="#matricula" 
                      className="inline-flex items-center gap-1 text-kennedy-blue-primary font-heading font-extrabold text-lg hover:text-kennedy-gold-dark transition-colors group"
                    >
                      <span>{activeData.highlightLinkLabel}</span>
                    </a>
                  </div>
                )}

                {activeData.hasPartnerLogo && (
                  <div className="mt-6 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-md">
                    <img 
                      src={activeData.partnerLogo} 
                      alt={activeData.partnerTitle} 
                      referrerPolicy="no-referrer"
                      className="h-[72px] w-auto object-contain shrink-0"
                    />
                    <div className="text-xs text-kennedy-gray-dark leading-normal">
                      <p className="font-bold text-kennedy-blue-dark text-sm">{activeData.partnerTitle}</p>
                      <p>{activeData.partnerDesc}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Visuals */}
              <div className="relative">
                {/* Decorative blob backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-kennedy-blue-pale rounded-[100px] -rotate-6 z-0"></div>
                
                <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                  <img src={activeData.imgMain} alt={activeData.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                
                {/* Sub image (polaroid style) */}
                <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white z-20 -rotate-6 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                  <img src={activeData.imgSub} alt="Detalhe do segmento" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-0 right-0 text-center font-accent italic text-xs font-bold text-kennedy-blue-dark bg-white/80 py-1">
                    {activeData.name}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-8 -right-4 md:-right-8 bg-kennedy-gold text-kennedy-blue-dark px-6 py-3 rounded-full font-bold shadow-lg z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                  {activeData.badge}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
