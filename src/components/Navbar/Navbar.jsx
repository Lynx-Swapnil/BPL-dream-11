import React, { useState } from 'react';
import dollarImg from '../../../assets/dollar.png';
import logoImg from '../../../assets/logo.png';

const Navbar = ({ coin, onAddCoin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='w-full'>
      <div className='mx-auto w-[92%] max-w-315 py-6 md:py-8'>
        <div className='flex items-center justify-between'>
          <a href='/' className='block'>
            <img src={logoImg} alt='Cricket logo' className='w-16 md:w-20' />
          </a>

          <div className='flex items-center gap-4 md:gap-10'>
            <nav className='hidden md:flex items-center gap-10 text-[#8B8B8D] text-base font-medium'>
              <a href='#' className='hover:text-[#202020] transition-colors'>Home</a>
              <a href='#' className='hover:text-[#202020] transition-colors'>Fixture</a>
              <a href='#' className='hover:text-[#202020] transition-colors'>Teams</a>
              <a href='#' className='hover:text-[#202020] transition-colors'>Schedules</a>
            </nav>

            <button
              type='button'
              className='md:hidden h-12 w-12 rounded-xl border border-[#E7E7E7] bg-white grid place-items-center'
              aria-label='Toggle navigation menu'
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className='sr-only'>Menu</span>
              <div className='space-y-1.5'>
                <span className='block h-0.5 w-5 bg-[#202020]'></span>
                <span className='block h-0.5 w-5 bg-[#202020]'></span>
                <span className='block h-0.5 w-5 bg-[#202020]'></span>
              </div>
            </button>

            <div className='flex items-center gap-2'>
              <button className='h-12 rounded-xl border border-[#E7E7E7] px-4 md:px-5 bg-white flex items-center gap-2 font-semibold text-[#202020]'>
                {coin} Coin
                <img src={dollarImg} alt='Coin' className='w-4 h-4' />
              </button>
              <button
                type='button'
                className='h-12 w-12 rounded-xl border border-[#E7E7E7] bg-[#E7FE29] text-xl font-bold text-[#202020]'
                onClick={onAddCoin}
                aria-label='Add coins'
                title='Add coins'
              >
                +
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className='md:hidden mt-4 rounded-2xl border border-[#E7E7E7] bg-white p-4 shadow-sm text-[#5f5f66] font-medium'>
            <ul className='space-y-3'>
              <li><a href='#' className='block hover:text-[#202020] transition-colors'>Home</a></li>
              <li><a href='#' className='block hover:text-[#202020] transition-colors'>Fixture</a></li>
              <li><a href='#' className='block hover:text-[#202020] transition-colors'>Teams</a></li>
              <li><a href='#' className='block hover:text-[#202020] transition-colors'>Schedules</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;