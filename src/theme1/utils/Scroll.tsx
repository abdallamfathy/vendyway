import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollProps {
    children: React.ReactNode;
  }

const Scroll: React.FC<ScrollProps> = ({ children }) => {
    const location = useLocation();
  
    useEffect(() => {
      // Scroll to the top when the location changes (page navigation)
      window.scrollTo(0, 0);
    }, [location]);
  
    return <div>{children}</div>;
  };
  
export default Scroll;