import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  return (
    <>
    <Header />
    <Dog name="Joe" age={10} weight="20 lbs" />
    </>
  );
}
