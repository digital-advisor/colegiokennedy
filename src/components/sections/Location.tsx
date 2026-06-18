import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="section-tag">Nossa Estrutura</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Estamos no coração de Fortaleza</h2>
            
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-kennedy-blue-pale p-3 rounded-full text-kennedy-blue-primary shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
               </div>
              <div>
                <h4 className="text-xl font-bold text-kennedy-blue-dark mb-2">Colégio Kennedy</h4>
                <address className="not-italic text-kennedy-gray-dark font-body leading-relaxed">
                  Av. Engenheiro Santana Junior, 58<br />
                  Bairro Papicu - Fortaleza, CE<br />
                  CEP: 60175-551
                </address>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3 text-kennedy-gray-dark">
                <Clock className="w-5 h-5 text-kennedy-gold shrink-0" />
                <span className="font-medium">Seg-Sex: 07h às 17h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.app.goo.gl/m382rAvfDqtg18rPA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary shadow-[0_4px_25px_rgba(249,168,37,0.45)] hover:scale-105 active:scale-95 transition-all text-center w-full sm:w-auto"
              >
                <Navigation className="w-5 h-5 mr-3 shrink-0" />
                Como Chegar (Google Maps)
              </a>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-kennedy-gray-light">
             {/* Map Placeholder, would be an iframe */}
             <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-kennedy-blue-dark/20 backdrop-blur-[2px]"></div>
                <div className="bg-white p-6 rounded-2xl shadow-xl z-10 text-center mx-4">
                  <MapPin className="w-10 h-10 text-kennedy-danger mx-auto mb-2 animate-bounce" />
                  <h4 className="font-bold text-kennedy-blue-dark text-lg">Colégio Kennedy</h4>
                  <p className="text-sm text-kennedy-gray-dark mb-4 font-semibold">Clique no mapa para navegar</p>
                  <a 
                    href="https://maps.app.goo.gl/m382rAvfDqtg18rPA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !px-6 !py-3 text-sm !rounded-xl w-full text-center block"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
