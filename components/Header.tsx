'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CorelixLogo from './CorelixLogo';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/about' },
    { label: 'Why us?', href: '/features' },
    { label: 'Our work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo" aria-label="Corelix Systems Home" onClick={closeNavbar}>
          <CorelixLogo />
        </Link>

        <div className="navbar-wrapper">
          <button
            type="button"
            className="navbar-menu-btn"
            onClick={toggleNavbar}
            aria-label="Toggle Navigation Menu"
            data-navbar-toggle-btn
          >
            {navbarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`navbar ${navbarOpen ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="nav-item">
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? 'active-nav' : ''}`}
                      onClick={closeNavbar}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={closeNavbar}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

