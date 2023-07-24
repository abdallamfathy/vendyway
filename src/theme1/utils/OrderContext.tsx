// OrderContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface OrderContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const OrderContext = createContext<OrderContextProps>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [isMenuOpen , setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(true);
    
    if (isMenuOpen) {
        const drawer = document.getElementById('side-menu');
        drawer?.classList.toggle('toggle');
     }
  };


  return (
    <OrderContext.Provider value={{ isMenuOpen, toggleMenu}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
