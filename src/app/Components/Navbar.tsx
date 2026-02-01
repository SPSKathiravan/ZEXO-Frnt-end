'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
// Import your logo here
import logo from '../../../public/logo.png';

const TEAL = '#08b48d';
const TEAL_LIGHT = '#00d4aa';
const LIGHT_TEXT = '#e2e8f0';
const MUTED_TEXT = '#cbd5e1';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  // Map pathname to nav link name
  const getActiveLink = (path: string) => {
    if (path === '/') return 'Home';
    if (path === '/services') return 'Services';
    if (path === '/about') return 'About';
    if (path === '/contact') return 'Contact';
    return 'Home';
  };

  useEffect(() => {
    // Update active link based on current pathname
    setActive(getActiveLink(pathname));
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = useCallback((name: string, href: string) => {
    if (isMobile) setOpen(false);
    // Prevent navigation if already on the same page
    if (pathname === href) {
      return false;
    }
  }, [isMobile, pathname]);

  const applyTheme = (themeName: string) => {
    const html = document.documentElement;
    if (themeName === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <header className="relative z-50 w-full">
      {/* Modern Minimalist Navbar */}
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out ${scrolled
            ? 'top-3 w-[80vw] md:max-w-4xl rounded-2xl border border-slate-700/40 dark:border-slate-700/40 bg-white/80 dark:bg-black/60 backdrop-blur-2xl px-6 md:px-12 py-3'
            : 'top-0 w-full px-4 md:px-8 py-5 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800/50'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Add your logo image here - uncomment and update the import above */}
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="transition-all duration-1000 ease-in-out group-hover:scale-110"
            />
            <span className="hidden sm:flex flex-col">
              <span className="font-black text-base md:text-lg leading-none text-gray-900 dark:text-white">ZEXO <span style={{ color: TEAL }}>Agency</span></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-2 md:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === link.href) {
                      e.preventDefault();
                    }
                    handleNavClick(link.name, link.href);
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-1000 ease-in-out group"
                  style={{
                    color: active === link.name ? TEAL : theme === 'light' ? '#374151' : LIGHT_TEXT,
                  }}
                >
                  {link.name}
                  <div
                    className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full transition-all duration-1000 ease-in-out ${active === link.name ? 'opacity-100 bg-teal-500 shadow-lg shadow-teal-500/50' : 'opacity-0 group-hover:opacity-100 bg-teal-400/60'
                      }`}
                  />
                </Link>
              ))}
            </div>
          )}

          {/* CTA Button */}
          {!isMobile && (
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full transition-all duration-1000 ease-in-out shadow-lg"
              style={{
                background: theme === 'dark' ? '#1e293b' : TEAL,
                boxShadow: theme === 'dark' ? 'none' : `0 0 20px ${TEAL}44`,
              }}
              onMouseEnter={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.boxShadow = `0 0 28px ${TEAL}66`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (theme === 'light') {
                  e.currentTarget.style.boxShadow = `0 0 20px ${TEAL}44`;
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
              aria-label="Toggle theme"
            >
              {/* Toggle circle */}
              <div
                className={`absolute top-1 w-5 h-5 rounded-full transition-all duration-1000 ease-in-out flex items-center justify-center ${theme === 'dark' ? 'left-1 bg-slate-700' : 'right-1 bg-white'
                  }`}
              >
                {theme === 'dark' ? (
                  <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00 5.656-5.656l2.12 2.12a6 6 0 01-5.656 5.656zm2.12-10.607a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM9 4a1 1 0 011.414-1.414L11.536 2.12a1 1 0 11-1.414 1.414L9 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              className="p-2.5 rounded-lg hover:bg-slate-800/50 transition-all duration-1000 ease-in-out"
              style={{ color: TEAL }}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-1000 ease-in-out ${open ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div
          className="fixed top-20 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-slate-700/40 z-40 p-6 animate-in fade-in slide-in-from-top-4 duration-1000"
          style={{
            boxShadow: `0 20px 50px 0 ${TEAL}22`,
          }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (pathname === link.href) {
                    e.preventDefault();
                  }
                  handleNavClick(link.name, link.href);
                }}
                className="px-4 py-3 rounded-lg text-center font-semibold transition-all duration-1000 ease-in-out hover:bg-gray-100 dark:hover:bg-slate-800/40"
                style={{
                  color: active === link.name ? TEAL : theme === 'light' ? '#374151' : LIGHT_TEXT,
                  borderBottom: active === link.name ? `2px solid ${TEAL}` : 'none',
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <button
                onClick={toggleTheme}
                className="w-full relative h-8 rounded-full transition-all duration-1000 ease-in-out shadow-lg"
                style={{
                  background: theme === 'dark' ? '#1e293b' : TEAL,
                  boxShadow: theme === 'dark' ? 'none' : `0 0 20px ${TEAL}44`,
                }}
                aria-label="Toggle theme"
              >
                {/* Toggle circle */}
                <div
                  className={`absolute top-1.5 w-5 h-5 rounded-full transition-all duration-1000 ease-in-out flex items-center justify-center ${theme === 'dark' ? 'left-1.5 bg-slate-700' : 'right-1.5 bg-white'
                    }`}
                >
                  {theme === 'dark' ? (
                    <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00 5.656-5.656l2.12 2.12a6 6 0 01-5.656 5.656zm2.12-10.607a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM9 4a1 1 0 011.414-1.414L11.536 2.12a1 1 0 11-1.414 1.414L9 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className={`transition-all duration-1000 ease-in-out ${scrolled ? 'h-20' : 'h-0'}`} />
    </header>
  );
}
