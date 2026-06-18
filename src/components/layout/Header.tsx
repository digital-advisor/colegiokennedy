import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar - Hidden on Mobile */}
      <div className={`hidden md:flex justify-between items-center px-8 py-2 text-sm transition-colors duration-300 ${isScrolled ? 'bg-kennedy-blue-dark text-white' : 'bg-kennedy-blue-dark/80 text-white'}`}>
        <div className="flex items-center space-x-6">
          <a href="tel:+558532624069" className="flex items-center space-x-2 hover:text-kennedy-gold transition-colors">
            <Phone size={14} />
            <span>(85) 3262-4069</span>
          </a>
          <a href="mailto:contato@colegiokennedy.com.br" className="flex items-center space-x-2 hover:text-kennedy-gold transition-colors">
            <Mail size={14} />
            <span>contato@colegiokennedy.com.br</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-kennedy-gold transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-kennedy-gold transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-kennedy-gold transition-colors"><Youtube size={16} /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <a href="#" className="flex-shrink-0 relative z-50 block h-10 md:h-12 w-48 md:w-64">
          <img 
            src="https://drive.google.com/thumbnail?id=1br77YQvACm48YFaN257GHEhKctNBq6g0&sz=w1000" 
            alt="Colégio Kennedy" 
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${isScrolled && !isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          />
          <img 
            src="https://drive.google.com/thumbnail?id=1mx6StKYTi0Z3D2nRivxwFlUM5GOORqHy&sz=w1000" 
            alt="Colégio Kennedy" 
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${isScrolled && !isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="#kennedy" isScrolled={isScrolled}>O Kennedy</NavLink>
          <NavLink href="#ensino" isScrolled={isScrolled}>Ensino</NavLink>
          <NavLink href="#familias" isScrolled={isScrolled}>Para Famílias</NavLink>
          <NavLink href="#contato" isScrolled={isScrolled}>Contato</NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className={`font-semibold hover:text-kennedy-gold transition-colors ${isScrolled ? 'text-kennedy-blue-primary' : 'text-white'}`}>
            Área do Aluno
          </a>
          <a 
            href="https://wa.me/message/26HLQ3X4G2EJG1" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Matricule-se
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className={`lg:hidden relative z-50 p-2 text-2xl ${isMobileMenuOpen || !isScrolled ? 'text-white' : 'text-kennedy-blue-primary'}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-kennedy-blue-dark z-40 flex flex-col justify-center items-center h-screen"
          >
            <div className="flex flex-col items-center space-y-6 text-xl">
              <MobileNavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#kennedy" onClick={() => setIsMobileMenuOpen(false)}>O Kennedy</MobileNavLink>
              <MobileNavLink href="#ensino" onClick={() => setIsMobileMenuOpen(false)}>Ensino</MobileNavLink>
              <MobileNavLink href="#familias" onClick={() => setIsMobileMenuOpen(false)}>Para Famílias</MobileNavLink>
              <MobileNavLink href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</MobileNavLink>
              
              <div className="mt-8 flex flex-col items-center space-y-4 w-full px-8">
                <a href="#" className="w-full text-center py-3 text-white border border-white/30 rounded-full font-semibold">Área do Aluno</a>
                <a 
                  href="https://wa.me/message/26HLQ3X4G2EJG1" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full text-center py-3 bg-kennedy-gold text-kennedy-blue-dark rounded-full font-bold"
                >
                  Matricule-se
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children, isScrolled }: { href: string, children: React.ReactNode, isScrolled: boolean }) {
  return (
    <a 
      href={href} 
      className={`font-semibold hover:text-kennedy-gold transition-colors relative group ${isScrolled ? 'text-kennedy-blue-dark' : 'text-white/90'}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kennedy-gold transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-white font-heading font-bold text-3xl hover:text-kennedy-gold transition-colors"
    >
      {children}
    </a>
  );
}
