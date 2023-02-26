import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from './context/books';
import NavigationProvider from './context/navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </Provider>
);
