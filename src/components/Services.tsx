
import React from 'react';
import { ShieldCheck, Truck, Package, Phone } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Produtos Certificados',
    description: 'Todos os nossos EPIs possuem Certificado de Aprovação (CA) e atendem às normas técnicas vigentes.',
    icon: ShieldCheck,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Entrega Rápida',
    description: 'Entregamos seus produtos no menor tempo possível, garantindo que sua operação não pare.',
    icon: Truck,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Ampla Gama de Produtos',
    description: 'Oferecemos uma grande variedade de EPIs para todos os tipos de necessidades e áreas de atuação.',
    icon: Package,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Atendimento Personalizado',
    description: 'Nossa equipe está pronta para entender suas necessidades e oferecer as melhores soluções em EPIs.',
    icon: Phone,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Por que escolher a EPIS Moriá?
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em equipamentos de proteção individual 
            para garantir a segurança dos seus colaboradores.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-red-100 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-red-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5551995176810" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black hover:bg-neutral-800 text-red-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
