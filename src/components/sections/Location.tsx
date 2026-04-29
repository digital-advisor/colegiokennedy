import React from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

export default function Location() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="section-tag">Nossa Estrutura</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-kennedy-blue-dark mb-6 tracking-tight">Estamos no coração da cidade</h2>
            
            <div className="flex items-start space-x-4 mb-8">
              <div className="bg-kennedy-blue-pale p-3 rounded-full text-kennedy-blue-primary shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-kennedy-blue-dark mb-2">Colégio Kennedy</h4>
                <address className="not-italic text-kennedy-gray-dark font-body leading-relaxed">
                  Av. Pontes Vieira, XXXX<br />
                  Bairro - Fortaleza, CE<br />
                  CEP: 60000-000
                </address>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3 text-kennedy-gray-dark">
                <Car className="w-5 h-5 text-kennedy-gold shrink-0" />
                <span className="font-medium">Estacionamento próprio e seguro</span>
              </div>
              <div className="flex items-center space-x-3 text-kennedy-gray-dark">
                <Clock className="w-5 h-5 text-kennedy-gold shrink-0" />
                <span className="font-medium">Seg-Sex: 07h às 18h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary shadow-none border-2 border-kennedy-gold bg-none text-kennedy-blue-dark hover:-translate-y-1 !py-4">
                <Navigation className="w-5 h-5 mr-2" />
                Como Chegar (Google Maps)
              </a>
              <a href="#" className="inline-flex items-center justify-center border-2 border-kennedy-blue-dark text-kennedy-blue-dark font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-kennedy-blue-dark hover:text-white">
                Como Chegar (Waze)
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
                  <p className="text-sm text-kennedy-gray-dark mb-4">Clique no mapa para navegar</p>
                  <button className="btn-primary !px-6 !py-2 text-sm !rounded-lg w-full">Abrir Mapa Interativo</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
