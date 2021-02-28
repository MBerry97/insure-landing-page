import React from 'react';
import InsureLogo from '../../Shared/Logo/Logo';
import Nav from '../../Template/Nav/Nav';
import Hamburger from './Hamburger';

export default function Header() {
  return (
    <header>
      <InsureLogo />
      <Hamburger />
      <Nav />
    </header>
  );
}
