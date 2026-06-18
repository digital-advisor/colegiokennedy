import React, { useState } from 'react';
import { Target, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Enrollment() {
  const [responsavel, setResponsavel] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [aluno, setAluno] = useState('');
  const [serie, setSerie] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!responsavel || !whatsapp || !aluno || !serie) {
      return;
    }
    const formattedMessage = `Olá! Gostaria de mais informações sobre as matrículas 2027.

*Nome do Responsável:* ${responsavel}
*WhatsApp:* ${whatsapp}
*Nome do Aluno(a):* ${aluno}
*Série desejada:* ${serie}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/558596505001?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <section id="matricula" className="py-24 relative overflow-hidden bg-kennedy-blue-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-kennedy-blue-primary rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-kennedy-blue-primary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info & CTAs */}
          <div className="text-white">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-kennedy-danger px-4 py-2 rounded-full mb-6 relative overflow-hidden"
            >
              <Target className="w-5 h-5 text-white animate-pulse" />
              <span className="font-bold text-sm tracking-wide">Vagas Limitadas para 2027</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-shimmer"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
              Matricule seu filho no Kennedy
            </h2>
            <p className="text-xl text-white/80 mb-10 font-body leading-relaxed max-w-lg">
              Faça parte de uma school que há 70 anos transforma vidas com educação de excelência, acolhimento e inovação.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Condições especiais de matrícula antecipada",
                "Desconto progressivo para irmãos",
                "Material didático integrado",
                "Tour guiado para conhecer a estrutura"
              ].map((benefit, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex items-center text-lg font-medium text-white/90"
                >
                  <CheckCircle className="w-6 h-6 text-kennedy-gold mr-3 shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </div>

            <p className="text-center sm:text-left text-white/80 font-semibold text-lg mt-4">
              Fale conosco por telefone: <a href="tel:+558532624069" className="text-kennedy-gold hover:underline font-bold">(85) 3262-4069</a>
            </p>
          </div>

          {/* Right: Form Form */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10">
              <h3 className="text-2xl font-heading font-black text-kennedy-blue-dark mb-2 text-center">Pré-matrícula 2027</h3>
              <p className="text-kennedy-gray-dark text-center mb-8 text-sm">Preencha o formulário abaixo e nossa equipe entrará em contato com as melhores condições.</p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-kennedy-blue-dark mb-2 ml-1">Nome do Responsável *</label>
                  <input 
                    type="text" 
                    required
                    value={responsavel}
                    onChange={(e) => setResponsavel(e.target.value)}
                    placeholder="Como devemos chamar você?" 
                    className="w-full px-5 py-4 border border-kennedy-gray-medium/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-kennedy-gray-light/50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-kennedy-blue-dark mb-2 ml-1">WhatsApp *</label>
                  <input 
                    type="tel" 
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(85) 90000-0000" 
                    className="w-full px-5 py-4 border border-kennedy-gray-medium/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-kennedy-gray-light/50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-kennedy-blue-dark mb-2 ml-1">Nome do Aluno(a) *</label>
                  <input 
                    type="text" 
                    required
                    value={aluno}
                    onChange={(e) => setAluno(e.target.value)}
                    placeholder="Nome da criança" 
                    className="w-full px-5 py-4 border border-kennedy-gray-medium/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-kennedy-gray-light/50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-kennedy-blue-dark mb-2 ml-1">Série desejada *</label>
                  <select 
                    required
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                    className="w-full px-5 py-4 border border-kennedy-gray-medium/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kennedy-blue-primary focus:border-transparent transition-all bg-kennedy-gray-light/50 appearance-none text-kennedy-gray-dark"
                  >
                    <option value="" disabled>Selecione a série desejada</option>
                    <option value="Educação Infantil">Educação Infantil</option>
                    <option value="1º ao 5º Ano (Ensino Fundamental I)">1º ao 5º Ano (Ensino Fundamental I)</option>
                    <option value="6º ao 9º Ano (Ensino Fundamental II)">6º ao 9º Ano (Ensino Fundamental II)</option>
                    <option value="Tempo Integral">Tempo Integral</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-primary !rounded-2xl !py-5 mt-4">
                  Enviar Solicitação
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center text-xs text-kennedy-gray-dark">
                <ShieldCheck className="w-4 h-4 text-kennedy-success mr-1" />
                Seus dados estão seguros conosco.
              </div>
            </div>

            {/* Social Proof Badge attached to the form */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-xl flex items-center space-x-3 z-20 border border-kennedy-gray-light">
              <div className="flex -space-x-3">
                <img src="https://drive.google.com/thumbnail?id=1F42BCxUrB3Q7nqr2EfB_bVYui6Svk_E_&sz=w200" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Avatar"/>
                <img src="https://drive.google.com/thumbnail?id=1wvhkLSO9y8HzsFXcR8S45LorCJeWD85A&sz=w200" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Avatar"/>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-kennedy-blue-light text-white font-bold text-xs flex items-center justify-center">+150</div>
              </div>
              <p className="text-xs font-bold text-kennedy-blue-dark leading-tight max-w-[120px]">
                Famílias já garantiram vaga em 2027
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
