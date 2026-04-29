import React from 'react';

export default function TrustBar() {
  const partners = [
    "Sistema Farias Brito", 
    "Google for Education", 
    "Cambridge Assessment", 
    "Escola da Inteligência", 
    "Bilingual Program"
  ];

  return (
    <section className="bg-kennedy-blue-pale/50 py-4 border-y border-kennedy-blue-light/10 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <span className="text-sm font-semibold text-kennedy-blue-dark/60 uppercase tracking-wider mb-3 md:mb-0 md:mr-8 shrink-0">
          Parceiros e Certificações:
        </span>
        <div className="relative flex overflow-x-hidden group w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <span key={index} className="text-kennedy-blue-primary font-bold text-lg opacity-60 hover:opacity-100 transition-opacity">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
