import { useState, useEffect } from 'react';
import './App.css';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import Account from './components/Account';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Modal from './components/Modal';
import Lookbook from './components/Lookbook';

const PAGES = ['home', 'account', 'orders', 'cart', 'contact'];

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const navigate = (page) => {
    const target = page.toLowerCase();
    setCurrentPage(target);
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPage === 'home';

  return (
    <div className="app page-load">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main>
        {isHome && (
          <>
            <Hero />
            <Categories />
            <ProductCards />
            <Testimonials />
          </>
        )}
        {currentPage === 'account' && <Account />}
        {currentPage === 'orders' && <Orders />}
        {currentPage === 'cart' && <Cart onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
      <Toast />
      <Modal onNavigate={navigate} />
      <Lookbook />
    </div>
  );
}

function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
