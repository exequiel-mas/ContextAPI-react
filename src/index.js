import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorContextProvider } from './context/color-context'; //SE AGREGA ESTA LINEA

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>
);
// ENVOLVEMOS LA APP CON NUESTRO PROVIDER.
