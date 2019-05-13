import React from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <h1>My Prop Dog</h1>
    </header>
  );
}
