"use client";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 z-40 w-full px-10 py-6 transition-colors duration-500 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <div className="flex flex-wrap items-center justify-between w-full md:justify-around">
        <Link href='/'>
          <img title='Long Hun logo' src="/assets/logo/logo2.png" className="w-20 h-auto md:hidden" alt="Logo" />
        </Link>
        <button
          title='Open Menu'
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-black focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between`} id="navbar-default">
          <Link href='/'>
            <img title='Long Hun logo' src="/assets/logo/logo2.png" className="hidden w-20 h-auto md:block" alt="Logo" />
          </Link>
          <ul className="flex flex-col p-4 mt-4 bg-black border border-none rounded bg-opacity-90 md:flex-row md:w-3/5 md:justify-around rtl:space-x-reverse md:bg-transparent md:mt-0">
            <li title='Inicio'>
              <Link href="/" className="block px-3 py-2 text-white hover:text-orange-400 active:text-black">INICIO</Link>
            </li>
            <li title='Nosotros'>
              <Link href="/nosotros" className="block px-3 py-2 text-white hover:text-orange-400 active:text-black">NOSOTROS</Link>
            </li>
            <li title='Portafolio'> 
              <Link href="/portafolio" className="block px-3 py-2 text-white hover:text-orange-400 active:text-black">PORTAFOLIO</Link>
            </li>
            <li title='Contactanos'>
              <Link href="/contactanos" className="block px-3 py-2 text-white hover:text-orange-400 active:text-black">CONTÁCTANOS</Link>
            </li>
          </ul>
          <div className="hidden gap-2 text-white md:flex md:items-center">
            <a title='facebook' href='https://www.facebook.com/jose.kraitz'><FaFacebook className="w-5 h-auto hover:text-orange-400 active:text-black" /></a>
            <a title='youtube' href='https://www.youtube.com/@josekraitz8023'><FaYoutube className="w-5 h-auto hover:text-orange-400 active:text-black" /></a>
            <a title='instagram' href='https://www.instagram.com/kraitzjose/'><FaInstagram className="w-5 h-auto hover:text-orange-400 active:text-black" /></a>
            <a title='tiktok' href='https://www.tiktok.com/@long.hun3'><FaTiktok className="w-5 h-auto hover:text-orange-400 active:text-black" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
