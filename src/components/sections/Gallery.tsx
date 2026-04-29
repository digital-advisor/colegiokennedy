import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram } from 'lucide-react';

const categories = ['Todos', 'Eventos', 'Dia a Dia', 'Datas Comemorativas', 'Esportes'];

const galleryPhotos = [
  { id: 1, category: 'Eventos', img: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Festa da Família', date: 'Maio 2026' },
  { id: 2, category: 'Dia a Dia', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Aula de Ciências', date: 'Abril 2026' },
  { id: 3, category: 'Esportes', img: 'https://images.unsplash.com/photo-1546519638-3236ddb483c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Jogos Internos', date: 'Março 2026' },
  { id: 4, category: 'Datas Comemorativas', img: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Carnaval', date: 'Fevereiro 2026' },
  { id: 5, category: 'Dia a Dia', img: 'https://images.unsplash.com/photo-1588725845946-b1cb8668aa15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Hora do Recreio', date: 'Abril 2026' },
  { id: 6, category: 'Eventos', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Feira Cultural', date: 'Novembro 2025' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');

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
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat 
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
