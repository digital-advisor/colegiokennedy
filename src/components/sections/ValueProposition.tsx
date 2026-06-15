import React from 'react';
import { motion } from 'motion/react';
import { Heart, BookOpen, Star } from 'lucide-react';

export default function ValueProposition() {
  const pillars = [
    {
      icon: <Heart className="w-8 h-8 text-kennedy-gold" />,
      title: "Acolhimento",
      desc: "Aqui, cada aluno é parte da nossa família. Cuidamos com carinho em cada fase da infância e juventude."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-kennedy-gold" />,
      title: "Metodologia",
      desc: "Ensino com propósito, que desenvolve respeito, responsabilidade e prepara para todos os desafios da vida."
    },
    {
      icon: <Star className="w-8 h-8 text-kennedy-gold" />,
      title: "Resultados",
      desc: "70 anos formando não apenas alunos de destaque, mas pessoas preparadas e seguras para o mundo."
    }
  ];

  return (
    <section id="kennedy" className="py-24 bg-gradient-to-b from-white to-kennedy-blue-pale/30">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Por que o Kennedy?</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Educação de Excelência</h2>
          <p className="text-lg text-kennedy-gray-dark font-body leading-relaxed">
            Há 70 anos, combinamos tradição e inovação para formar cidadãos completos, autônomos e preparados para o mundo moderno.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Pillars Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-kennedy-gray-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 bg-kennedy-blue-pale rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-kennedy-blue-dark mb-3">{pillar.title}</h3>
                  <p className="text-kennedy-gray-dark leading-relaxed">"{pillar.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Video Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1ksX2bupW7XjmTp5TE5sHU0THZqYv4GCp&sz=w1000" 
              alt="Diretor do colégio" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-kennedy-blue-dark/40 group-hover:bg-kennedy-blue-dark/50 transition-colors"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <p className="text-white text-center font-accent text-xl md:text-2xl italic font-medium drop-shadow-md">
                "Limites não são barreiras, são caminhos seguros para o crescimento."
              </p>
              <span className="text-white/80 text-sm font-bold uppercase tracking-wider mt-4">— Direção</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
