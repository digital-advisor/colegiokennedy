import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, FolderOpen, ExternalLink, X } from 'lucide-react';

const categories = ['Todos', 'Eventos', 'Dia a Dia', 'Projetos'];

const galleryPhotos = [
  { id: 2, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1xVpJfdx_-acJG0sCkVFI9IFcnNMm01Re&sz=w1000', title: 'Interação e Aprendizado', date: 'Dia a Dia' },
  { id: 5, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1pN-kqubOWR9RJnR3lLWVmmOw72r3Af_y&sz=w1000', title: 'Atividades Artísticas', date: 'Dia a Dia' },
  { id: 9, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1j0qUkiZyX-VwKTiHsw1yT81pb6g6KT3G&sz=w1000', title: 'Desenvolvimento Psicomotor', date: 'Dia a Dia' },
  { id: 10, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1ru8CjqJgAJ6pS2aKViKKRbnBMc7NiL_Y&sz=w1000', title: 'Exploração e Descobertas', date: 'Dia a Dia' },
  { id: 11, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1Gv94E2233cScu5Ab3Iak7MFpM4Mav16m&sz=w1000', title: 'Trabalho em Grupo', date: 'Dia a Dia' },
  { id: 12, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1QBQoOgbBev8nq1fw7yF46bUICDafgyXv&sz=w1000', title: 'Orientação e Afeto', date: 'Dia a Dia' },
  { id: 13, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=106oIKk2QIxj9eqOjIPD1Ou6iGBjtdCKQ&sz=w1000', title: 'Socialização no Pátio', date: 'Dia a Dia' },
  { id: 14, category: 'Dia a Dia', img: 'https://drive.google.com/thumbnail?id=1a5V0zxEskcuYd3l3qbNw9YCRzLswEf61&sz=w1000', title: 'Momentos Felizes', date: 'Dia a Dia' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [modalCategory, setModalCategory] = useState<string | null>(null);

  const driveLinks: Record<string, { title: string; url?: string; desc: string; comingSoon?: boolean }[]> = {
    'Eventos': [
      {
        title: 'Festa Junina Kennedy 2026',
        desc: 'Veja as fotos, danças e momentos inesquecíveis da nossa linda festa.',
        comingSoon: true
      },
      {
        title: 'Dia das Mães - Kennedy',
        url: 'https://drive.google.com/drive/folders/12TULEgesDKF-WNbUSla9ZYGnMX5BUT2L?usp=sharing',
        desc: 'Álbum repleto de sorrisos e celebração de carinho com nossas famílias.'
      }
    ],
    'Projetos': [
      {
        title: 'Projeto Empreendedorismo',
        url: 'https://drive.google.com/drive/folders/12TULEgesDKF-WNbUSla9ZYGnMX5BUT2L?usp=sharing',
        desc: 'A criatividade financeira e as iniciativas criativas criadas pelas turmas.'
      },
      {
        title: 'Iniciação Científica & Robótica',
        url: 'https://drive.google.com/drive/folders/12TULEgesDKF-WNbUSla9ZYGnMX5BUT2L?usp=sharing',
        desc: 'Os experimentos, protótipos e descobertas científicas dos estudantes.'
      },
      {
        title: 'Atividades Maker e Projetos Especiais',
        url: 'https://drive.google.com/drive/folders/12TULEgesDKF-WNbUSla9ZYGnMX5BUT2L?usp=sharing',
        desc: 'Mão na massa e ideias inovadoras colocadas em prática no laboratório.'
      }
    ]
  };

  const filteredPhotos = activeCategory === 'Todos' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Galeria de Momentos</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Cada sorriso, cada conquista, cada momento especial da nossa comunidade escolar.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                if (cat === 'Eventos' || cat === 'Projetos') {
                  setModalCategory(cat);
                } else {
                  setActiveCategory(cat);
                }
              }}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat || (modalCategory === cat)
                  ? 'bg-kennedy-blue-dark text-white shadow-md' 
                  : 'bg-kennedy-gray-light text-kennedy-gray-dark hover:bg-kennedy-blue-pale hover:text-kennedy-blue-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid (simulated with CSS Grid for simplicity) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={photo.img} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark/90 via-kennedy-blue-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-kennedy-gold text-xs font-bold uppercase tracking-wider mb-1 block">{photo.category}</span>
                    <h4 className="text-white font-bold text-xl mb-1">{photo.title}</h4>
                    <span className="text-white/70 text-sm">{photo.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Popup for Eventos / Projetos */}
        <AnimatePresence>
          {modalCategory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalCategory(null)}
                className="absolute inset-0 bg-kennedy-blue-dark/60 backdrop-blur-sm"
              />
              
              {/* Content Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-kennedy-gray-light z-10 overflow-hidden"
              >
                <button 
                  onClick={() => setModalCategory(null)}
                  className="absolute top-4 right-4 text-kennedy-gray-dark hover:text-kennedy-blue-dark transition-colors p-2 rounded-full hover:bg-kennedy-gray-light"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <FolderOpen className="w-8 h-8 text-kennedy-blue-primary shrink-0" />
                  <h3 className="text-2xl font-heading font-bold text-kennedy-blue-dark">
                    Pastas de {modalCategory}
                  </h3>
                </div>

                <p className="text-sm text-kennedy-gray-dark mb-6">
                  Selecione uma das opções abaixo para ser direcionado aos registros de {modalCategory} no Google Drive oficial do Kennedy:
                </p>

                 <div className="space-y-4">
                  {driveLinks[modalCategory]?.map((link, idx) => {
                    if (link.comingSoon) {
                      return (
                        <div
                          key={idx}
                          className="flex items-start justify-between p-4 rounded-xl bg-kennedy-gray-light/60 border border-transparent transition-all text-left relative"
                        >
                          <div className="flex-grow pr-4">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h4 className="font-bold text-kennedy-blue-dark/75 text-base">
                                {link.title}
                              </h4>
                              <span className="inline-block bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                Em breve
                              </span>
                            </div>
                            <p className="text-xs text-kennedy-gray-dark/70 leading-relaxed">
                              {link.desc}
                            </p>
                          </div>
                          <div className="bg-white/40 p-2 rounded-xl text-kennedy-gray-dark/30 shadow-sm shrink-0">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between p-4 rounded-xl bg-kennedy-gray-light hover:bg-kennedy-blue-pale/50 border border-transparent hover:border-kennedy-blue-light/30 transition-all group text-left"
                      >
                        <div className="flex-grow pr-4">
                          <h4 className="font-bold text-kennedy-blue-dark group-hover:text-kennedy-blue-primary transition-colors mb-1 text-base">
                            {link.title}
                          </h4>
                          <p className="text-xs text-kennedy-gray-dark leading-relaxed">
                            {link.desc}
                          </p>
                        </div>
                        <div className="bg-white p-2 rounded-xl text-kennedy-blue-primary group-hover:bg-kennedy-blue-primary group-hover:text-white shadow-sm transition-all shrink-0">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 pt-4 border-t border-kennedy-gray-light flex justify-end">
                  <button
                    onClick={() => setModalCategory(null)}
                    className="px-6 py-2.5 rounded-full bg-kennedy-blue-dark text-white font-bold text-sm hover:bg-kennedy-blue-primary transition-all shadow-md"
                  >
                    Fechar Janela
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Instagram Feed Section */}
        <div className="bg-kennedy-blue-pale/50 rounded-3xl p-8 md:p-12 text-center border border-kennedy-blue-light/20">
          <Instagram className="w-12 h-12 text-kennedy-blue-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-kennedy-blue-dark mb-4">Acompanhe nosso dia a dia</h3>
          <p className="text-kennedy-gray-dark max-w-xl mx-auto mb-8">
            Atualizações diárias, vídeos emocionantes e muito mais interação em nossa página do Instagram.
          </p>
          <a href="https://instagram.com/colegiokennedyoficial" target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-8 text-sm inline-flex items-center">
            <Instagram className="w-5 h-5 mr-2" />
            Siga @colegiokennedyoficial
          </a>
        </div>
      </div>
    </section>
  );
}
