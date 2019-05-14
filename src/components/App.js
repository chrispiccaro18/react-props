import React from 'react';
import ColorPicker from './ColorPicker';

const colors = ['red', 'yellow', 'blue'];

export default function App() {
  return (
    <>
      <ColorPicker colors={colors}/>
    </>
  );
}
