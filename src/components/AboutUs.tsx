import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-corporate-blue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Equipe de contabilidade trabalhando" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="https://media.istockphoto.com/id/584780288/pt/foto/de-seguran%C3%A7a.webp?a=1&b=1&s=612x612&w=0&k=20&c=8F4N8lHy_Ho2lT8307XBt8cdDxeMzd4KRP81Mv7tSRE=" />
              
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>Compromisso com a sua Segurança, Excelência em cada EPI</h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A EPIs Moriá nasceu do olhar atento às oportunidades diante da escassez de Equipamentos de Proteção Individual (EPIs) no mercado. Movida pela paixão pelo comércio e pelo compromisso com a segurança no trabalho, a fundadora Gisele de Souza Flores, com mais de três anos de experiência no setor, decidiu transformar seu sonho em realidade em janeiro de 2025.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
             Nosso propósito é claro: proteger sua equipe com EPIs de alta qualidade, sempre em conformidade com as Normas Regulamentadoras (NRs). Priorizamos um atendimento personalizado, com suporte online eficiente e entregas rápidas, garantindo agilidade e confiança em cada pedido.

Conte com a EPIs Moriá para cuidar do que há de mais importante: a segurança e o bem-estar de quem move sua empresa.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Qualificada</h4>
                  <p className="text-gray-600">Profissionais especializados e em constante atualização</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada cliente recebe atenção individualizada para suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Utilizamos as mais modernas ferramentas do mercado</p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;