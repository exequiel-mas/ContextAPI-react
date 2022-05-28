import { createContext, useState } from 'react';

// CREAMOS UN CONTEXTO Y LO GUARDAMOS EN LA VARIABLE COLORCONTEXT.
// createContext(DEFAULT VALUE) AQUII DEFINIMOS UN ESTADO INICIAL GLOBAL POR DEFECTO,
// EL CUAL SERA UTILIZADO EN CASO DE QUE LOS CONSUMIDORES NO TENGAN UN PROVIDER COMO PADRE.

export const ColorContext = createContext({
  selectedColor: 'orange',
  onColorChange: newColor => {},
});

//CADA OBJETO CONTEXT VIENE CON UN COMPONENTE PROVIDER DE REACT QUE PERMITE QUE LOS COMPONENTES
// QUE LO CONSUMEN SE SUSCRIBAN A LOS CAMBIOS DEL CONTEXTO

// CREAMOS UN PROVIDER EL CUAL VA ACTUAR DE PROVEEDOR DEL ESTADO PARA TODOS NUESTROS COMPONENTES.
export const ColorContextProvider = ({ children }) => {
  // DEFINIMOS EL ESTADO INICIAL DENTRO DEL PROVIDER Y UN MANEJADOR DE ESTADO CON EL HOOK USE STATE
  const [color, setColor] = useState('red');

  const handleColorChange = c => {
    setColor(c);
  };

  // CREAMOS LA VARIABLE CONTEXTVALUE, ES UN OBJETO QUE RECIBE EL ESTADO INICIAL DEL COLOR Y LA FUNCION PARA MANEJAR EL COLO (ACEPTA PROPS)
  const contextValue = {
    selectedColor: color,
    onColorChange: handleColorChange,
  };
  // FINALMENTE EL PROVIDER VA A PROVEER A LOS CONSUMIDORES EL ESTADO(contextValue) QUE LE PASEMOS COMO PROP
  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
