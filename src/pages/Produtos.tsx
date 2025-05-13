
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingButton from '../components/FloatingButton';
import ProductList from '../components/ProductList';

const Produtos = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Produtos | Epis Moriá - Equipamentos de Proteção Individual";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        <ProductList />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Produtos;
