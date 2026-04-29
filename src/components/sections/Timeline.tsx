import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const timelineEvents = [
  {
    year: "1956",
    title: "A Fundação",
    desc: "Início de um sonho focado em oferecer uma educação transformadora para a comunidade local de Fortaleza."
  },
  {
    year: "1970",
    title: "Expansão Relevante",
    desc: "Inauguração das novas instalações para acolher um número cada vez maior de alunos, consolidando nossa marca."
  },
  {
    year: "1995",
    title: "Tecnologia no Ensino",
    desc: "Pioneirismo na introdução de laboratórios de informática, preparando nossos alunos para o futuro."
  },
  {
    year: "2010",
    title: "Tempo Integral",
    desc: "Lançamento da primeira turma de Tempo Integral, atendendo à necessidade das famílias modernas."
  },
  {
    year: "2026",
    title: "70 Anos de Excelência",
    desc: "Celebramos sete décadas de compromisso inabalável com a educação de qualidade e inovação contínua."
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-kennedy-blue-dark relative overflow-hidden" ref={containerRef}>
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kennedy-blue-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <div className="inline-flex justify-center items-center mb-6">
            <div className="bg-kennedy-gold text-kennedy-blue-dark font-black text-2xl tracking-tighter px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(249,168,37,0.4)]">
              70 ANOS
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Uma história de dedicação</h2>
          <p className="text-lg text-white/80 font-body">
            Relembre os marcos que construíram nossa tradição em sete décadas de educação.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-kennedy-gold"
            ></motion.div>
          </div>
          {/* Animated Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-white/10">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-kennedy-gold"
            ></motion.div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center w-full">
                  {/* Timeline Node Point */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-kennedy-blue-dark border-4 border-kennedy-gold z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(249,168,37,0.5)]"
                  ></motion.div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`pl-20 md:pl-0 w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16 text-left md:text-right' : 'md:justify-start md:pl-16 text-left'}`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl relative group hover:bg-white/15 transition-colors">
                      <span className="font-heading font-black text-4xl md:text-5xl text-kennedy-gold/30 absolute -top-6 -left-4 md:-left-8 group-hover:text-kennedy-gold/50 transition-colors pointer-events-none select-none">
                        {event.year}
                      </span>
                      <div className="relative z-10">
                        <span className="inline-block text-kennedy-gold font-bold mb-2 tracking-wider">{event.year}</span>
                        <h4 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">{event.title}</h4>
                        <p className="text-white/80 font-body leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
