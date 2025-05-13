
import React from 'react';
import { HardHat, Shield, Glasses, Footprints, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Capacetes de Segurança',
    description: 'Proteção para a cabeça em diversos modelos e cores, com ou sem jugular.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1590142035743-4eeaa35f3753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 2,
    name: 'Luvas de Proteção',
    description: 'Luvas para proteção contra riscos mecânicos, químicos e térmicos.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1584622665968-29fde00b8f63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 3,
    name: 'Óculos de Proteção',
    description: 'Proteção visual contra impactos e radiações em diversos modelos.',
    icon: Glasses,
    image: 'https://images.unsplash.com/photo-1593791211660-ddb12e5c3b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  },
  {
    id: 4,
    name: 'Calçados de Segurança',
    description: 'Botinas, botas e sapatos de segurança para diversos ambientes de trabalho.',
    icon: Footprints,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    name: 'Proteção Auditiva',
    description: 'Protetores auriculares tipo plug ou concha para ambientes ruidosos.',
    icon: Headphones,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    name: 'Proteção Respiratória',
    description: 'Máscaras e respiradores para proteção contra poeiras, névoas e fumos.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  },
];

const ProductList = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-red-100 text-red-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Equipamentos de Proteção Individual
          </h1>
          <p className="text-gray-600 text-lg">
            Oferecemos uma ampla variedade de EPIs para garantir a segurança e o bem-estar dos seus colaboradores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-md">
                    <product.icon className="text-red-500" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-end">
                  <a 
                    href="https://wa.me/5551995176810" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-700 font-medium flex items-center gap-2"
                  >
                    Solicitar cotação
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
