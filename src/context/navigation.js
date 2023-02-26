import { createContext, useEffect, useState } from 'react';
import Button from '../components/ui/Button';

export const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handle = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handle);

    return () => {
      window.removeEventListener('popstate', handle);
    };
  }, []);

  const navigate = to => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };
  console.log('currentPath: ', currentPath);
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
