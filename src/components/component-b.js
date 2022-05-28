import { useContext } from 'react';
import { ColorContext } from '../context/color-context';

const ComponentB = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{ backgroundColor: selectedColor, width: '100%', height: 500 }}
      ></div>
      <h3 style={{ color: selectedColor }}>selected color: {selectedColor}</h3>
      <button onClick={() => onColorChange('violet')}>switch to violet</button>
    </>
  );
};

export default ComponentB;
