'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isOpen])

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src="/img/logo.png" alt="VulneraX Logo" width="auto" height="auto" />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link href="https://vulnerax.com">Home</Link></li>
            <li><Link href="https://vulnerax.com/#about">About</Link></li>
            <li><Link href="https://vulnerax.com/#services">Services</Link></li>
            <li><Link href="https://vulnerax.com/#our-team">Team</Link></li>
            <li><Link href="/" className='active'>Resources</Link></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleNav}></i>
        </nav>

        <Link href="#contact" className="btn-getstarted">Talk to us</Link>
      </div>
    </header>
  );
}
