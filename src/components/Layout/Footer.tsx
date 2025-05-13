
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(51) 99517-6810</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Comercial1.epismoria@outlook.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Bastão do Imperador, 56, Caju - Nova Santa Rita/RS</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors duration-300 inline-block">Início</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-red-400 transition-colors duration-300 inline-block">Produtos</Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com/epismoria" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-red-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>

            <div className="mt-8">
              <img 
                src="/lovable-uploads/8a64a688-6c5b-4b55-ab6e-7fe5dc86a71a.png" 
                alt="EPIS Moriá Logo" 
                className="h-16"
              />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} EPIS Moriá. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
