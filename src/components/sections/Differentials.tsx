import React from 'react';
import { motion } from 'motion/react';
import { Clock, UserCheck, Building2, GraduationCap, Trophy, Award } from 'lucide-react';

const differentialsData = [
  {
    icon: <Clock />,
    title: "Tempo Integral",
    desc: "Infraestrutura completa para uma rotina escolar estendida com conforto, nutrição e segurança."
  },
  {
    icon: <UserCheck />,
    title: "Acompanhamento",
    desc: "Atenção individualizada ao desenvolvimento cognitivo e socioemocional de cada aluno."
  },
  {
    icon: <Building2 />,
    title: "Infraestrutura",
    desc: "Ambientes amplos, climatizados e projetados para potencializar a experiência de aprendizagem."
  },
  {
    icon: <GraduationCap />,
    title: "Equipe Qualificada",
    desc: "Professores especialistas em constante formação e dedicados a inspirar os alunos."
  },
  {
    icon: <Trophy />,
    title: "Atividades Extras",
    desc: "Ampla oferta de esportes, artes e robótica para desenvolver talentos múltiplos."
  },
  {
    icon: <Award />,
    title: "70 Anos de Experiência",
    desc: "A solidez de uma instituição tradicional aliada às mais modernas metodologias educacionais."
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-kennedy-gray-light">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Diferenciais que fazem a diferença</h2>
          <p className="text-lg text-kennedy-gray-dark font-body">
            Cada detalhe da nossa estrutura e metodologia foi pensado para garantir o desenvolvimento completo e a felicidade do seu filho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentialsData.map((diff, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-kennedy-gray-light hover:shadow-xl hover:border-kennedy-blue-light transition-all duration-300 group overflow-hidden relative"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-kennedy-blue-pale to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-kennedy-blue-pale text-kennedy-blue-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-kennedy-blue-primary group-hover:text-white transition-colors duration-300 [&>svg]:w-7 [&>svg]:h-7">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {diff.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-heading font-bold text-kennedy-blue-dark mb-3 group-hover:text-kennedy-blue-primary transition-colors">{diff.title}</h3>
                <p className="text-kennedy-gray-dark leading-relaxed group-hover:text-kennedy-blue-dark/80">{diff.desc}</p>
                <div className="mt-6 flex items-center text-sm font-bold text-kennedy-blue-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Ler mais</span> <span className="ml-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
