import React from 'react';
import { motion } from 'motion/react';

export default function StructureTour() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Tour Virtual</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Conheça nossos espaços</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Uma estrutura acolhedora e moderna, pensada para aprender, brincar e crescer com segurança.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Main Large Item - Pátio/Recreação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group border border-kennedy-gray-light cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img src="https://drive.google.com/thumbnail?id=1t6Is923Av-VhNyYNq4XUDphbbCjOFeUE&sz=w1000" alt="Pátio principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Quadra Poliesportiva</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Espaço amplo e seguro para o convívio e brincadeiras diárias.</p>
            </div>
          </motion.div>

          {/* Salas de Aula */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group border border-kennedy-gray-light cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img src="https://drive.google.com/thumbnail?id=1xfFXv7EsxlT0nCXGRwi1Uqkl6TycnGFY&sz=w1000" alt="Salas de Aula" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-heading font-bold text-white">Salas Climatizadas</h3>
            </div>
          </motion.div>

          {/* Biblioteca */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group border border-kennedy-gray-light cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img src="https://drive.google.com/thumbnail?id=1rq-CdZM8fAKMr2TjEeCql44II4b0pEaf&sz=w1000" alt="Biblioteca" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-heading font-bold text-white">Área de Recreação</h3>
            </div>
          </motion.div>

          {/* Quadra Esportiva (Wide) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group border border-kennedy-gray-light cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img src="https://drive.google.com/thumbnail?id=1dQHiKwD3xE3Ex5RcmXmsGKaJSu-MMyZs&sz=w1000" alt="Quadra Poliesportiva" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-kennedy-blue-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-heading font-bold text-white mb-1">Área de Recreação</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Estrutura completa para atividades físicas e esportes coletivos.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <a href="#matricula" className="btn-outline border-kennedy-blue-primary text-kennedy-blue-primary hover:bg-kennedy-blue-primary hover:text-white">
            Agendar visita presencial →
          </a>
        </div>
      </div>
    </section>
  );
}
