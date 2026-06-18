import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-kennedy-blue-dark pt-16 overflow-hidden">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-kennedy-blue-pale/30"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8 mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="h-16 w-64 max-w-full">
              <img 
                src="https://drive.google.com/thumbnail?id=1CZDiDYxR_YDN5i_o6MrtCNPOShfXUeri&sz=w1000" 
                alt="Colégio Kennedy" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-white/80 font-accent italic text-lg leading-snug">
              "Educação que Transforma"
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Há 70 anos formando as bases de cidadãos completos, autônomos e preparados para o mundo moderno.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/colegiokennedyoficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-kennedy-gold hover:text-kennedy-blue-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61590472688265" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-kennedy-gold hover:text-kennedy-blue-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <div 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 cursor-default"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6 border-b border-white/10 pb-2 inline-block">Institucional</h4>
            <ul className="space-y-4">
              <li><a href="#historia" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Nossa História</a></li>
              <li><a href="#tour-virtual" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Estrutura e Tour Virtual</a></li>
              <li><a href="mailto:kennedycoordenacao@gmail.com" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6 border-b border-white/10 pb-2 inline-block">Para Famílias</h4>
            <ul className="space-y-4">
              <li><a href="#familias" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Portal do Aluno / App</a></li>
              <li><a href="#familias" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Calendário Escolar</a></li>
              <li>
                <a 
                  href="https://chat.whatsapp.com/Ehl4vOZC7joIycS7bHpdmq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-kennedy-gold transition-colors text-sm"
                >
                  Comunidade de Avisos
                </a>
              </li>
              <li><a href="#faq" className="text-white/70 hover:text-kennedy-gold transition-colors text-sm">Dúvidas Frequentes (FAQ)</a></li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send/?phone=558586679136&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-kennedy-gold transition-colors text-sm"
                >
                  Secretaria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contato Central</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-kennedy-gold mr-3 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">Av. Engenheiro Santana Junior, 58<br/>Bairro Papicu - Fortaleza, CE<br/>CEP: 60175-551</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-kennedy-gold mr-3 shrink-0" />
                <span className="text-white/70 text-sm"><a href="tel:+558532624069" className="hover:text-kennedy-gold transition-colors">(85) 3262-4069</a></span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-kennedy-gold mr-3 shrink-0" />
                <span className="text-white/70 text-sm">contato@colegiokennedy.com.br</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-kennedy-gold mr-3 shrink-0" />
                <span className="text-white/70 text-sm">Seg-Sex | 07h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 space-y-4 md:space-y-0">
          <p className="text-white/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Colégio Kennedy. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
