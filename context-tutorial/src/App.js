import React from 'react';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './contexts/color';
import ColorBox from './contexts/ColorBox';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
