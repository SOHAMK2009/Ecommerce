import { createContext, useContext, useState, useCallback } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [lookbookOpen, setLookbookOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [user, setUser] = useState({
    name: 'Soham Khedekar',
    email: 'sohamkhedekar5@gmail.com',
    initials: 'SK',
    addressLine1: '742 Speed Lane, Apt 12',
    addressLine2: 'Los Angeles, CA 90012',
    cardLast4: '4242',
    cardExpiry: '09/27',
  });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const openLookbook = useCallback(() => setLookbookOpen(true), []);
  const closeLookbook = useCallback(() => setLookbookOpen(false), []);

  const scrollToProducts = useCallback(() => {
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const selectCategory = useCallback(
    (categoryId) => {
      setActiveCategory(categoryId);
      scrollToProducts();
      showToast(`Showing ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} collection`);
    },
    [scrollToProducts, showToast]
  );

  const addToCart = useCallback(
    (product) => {
      if (product.soldOut) return;
      const sizes = ['9', '9.5', '10', '10.5', '11'];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const lineId = `${product.id}-${Date.now()}`;
      setCart((prev) => [
        ...prev,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          tag: product.tag,
          image: product.image,
        },
      ]);
      showToast(`${product.name} (Size ${size}) added to cart!`);
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (lineId) => {
      setCart((prev) => prev.filter((item) => item.lineId !== lineId));
      showToast('Item removed from cart');
    },
    [showToast]
  );

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      showToast('Your cart is empty — add some kicks first!', 'error');
      return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemCount = cart.length;
    setCart([]);
    setModal({
      type: 'checkout-success',
      data: { total, itemCount },
    });
  }, [cart, showToast]);

  const updateUser = useCallback((updates) => {
    setUser((prev) => {
      const next = { ...prev, ...updates };
      if (updates.name) {
        const parts = updates.name.trim().split(' ');
        next.initials = parts.map((p) => p[0]).join('').toUpperCase().slice(0, 2);
      }
      return next;
    });
    showToast('Profile updated successfully!');
    closeModal();
  }, [showToast, closeModal]);

  const value = {
    cart,
    cartCount: cart.length,
    toast,
    modal,
    lookbookOpen,
    activeCategory,
    user,
    showToast,
    closeModal,
    setModal,
    openLookbook,
    closeLookbook,
    scrollToProducts,
    selectCategory,
    setActiveCategory,
    addToCart,
    removeFromCart,
    checkout,
    updateUser,
    setUser,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
