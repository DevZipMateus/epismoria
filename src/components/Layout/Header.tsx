
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 md:mb-1">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-1 md:mb-0 items-center">
            <a href="mailto:Comercial1.epismoria@outlook.com" className="flex items-center hover:text-red-500 transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              Comercial1.epismoria@outlook.com
            </a>
            <a href="tel:+5551995176810" className="flex items-center hover:text-red-500 transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (51) 99517-6810
            </a>
          </div>
          
          {/* Social Media Icons */}
<div className="flex space-x-4">
  <a
    href="https://instagram.com/epismoria"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300"
  >
    <Instagram size={18} className="mr-2" />
    @epismoria
  </a>
</div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/8a64a688-6c5b-4b55-ab6e-7fe5dc86a71a.png" alt="EPIS Moriá Logo" className="h-20 mr-2 transition-all duration-300 transform hover:scale-[1.02]" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <a href="#services" className="nav-link">Serviços</a>
            <Link to="/produtos" className="nav-link">Produtos</Link>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-red-500 focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-3 flex flex-col space-y-2 border-t mt-2">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          <Link to="/produtos" className="px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Produtos</Link>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>;
};

export default Header;
