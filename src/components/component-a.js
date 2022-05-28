import { useContext } from 'react';
import { ColorContext } from '../context/color-context';

const ComponentA = () => {
  // PARA ACCEDER AL ESTADO GLOBAL CREADO UTILIZAMOS useContext(CONTEXTO_CREADO)
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;
  // idem a const {selectedColor, onColorChange} = useContext(ColorContext);

  return (
    <>
      <h1 style={{ color: selectedColor }}>Hello World</h1>
      <button onClick={() => onColorChange('green')}>Change to green</button>
      <button onClick={() => onColorChange('blue')}>Change to blue</button>
    </>
  );
};

export default ComponentA;
