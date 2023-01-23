import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSimpleLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, [location.pathname]);
};
