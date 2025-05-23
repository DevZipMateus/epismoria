
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text and buttons (left side) */}
          <div className="md:w-3/5 text-left">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
              animationDelay: '0.1s'
            }}>
              Cuidado e proteção para saúde do trabalhador
            </h1>
            
            <p className="text-lg text-red-200 mb-10 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              Equipe seu time com os melhores EPIs do mercado. Agilidade no atendimento, ampla gama de produtos e entrega rápida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4 animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              <a href="https://wa.me/5551995176810" target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
                <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </a>
              <a href="#services" className="btn-secondary">
                Nossos serviços
              </a>
            </div>
          </div>
          
          {/* Logo (right side) */}
          <div className="md:w-2/5 flex justify-center md:justify-end animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            <img 
              src="/lovable-uploads/8a64a688-6c5b-4b55-ab6e-7fe5dc86a71a.png" 
              alt="EPIS Moriá Logo" 
              className="h-32 md:h-60 object-contain" 
            />
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
