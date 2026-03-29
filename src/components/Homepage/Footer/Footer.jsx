import React from 'react';
import logoFooter from '../../../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className='relative mt-48 bg-[#030826] text-white'>
      <div className='absolute left-1/2 top-0 w-[88%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white  p-4'>
        <div className='rounded-xl bg-linear-to-br from-[#edf8fd] via-[#f6f6f6] to-[#f3dfbf] px-5 py-10 text-center md:px-16 md:py-11'>
          <h2 className='text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-[40px]'>Subscribe to our Newsletter</h2>
          <p className='mt-3 text-sm text-[#5c5c5c] md:text-[17px]'>Get the latest updates and news right in your inbox!</p>

          <form className='mx-auto mt-7 flex w-full max-w-lg flex-col items-center gap-3 sm:flex-row sm:gap-0'>
            <input
              type='email'
              placeholder='Enter your email'
              className='h-10 w-full rounded-xl border border-[#d8d8d8] bg-white px-4 text-sm text-[#333] outline-none sm:rounded-r-none'
            />
            <button
              type='button'
              className='h-10 w-full rounded-xl border border-transparent bg-linear-to-r from-[#f2addb] to-[#f2d267] px-8 text-sm font-bold text-[#151515] sm:w-auto sm:rounded-l-none'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='container mx-auto px-4 pb-8 pt-56 md:px-0 md:pt-60'>
        <img src={logoFooter} alt='Cricket' className='mx-auto w-20 md:w-22' />

        <div className='mx-auto mt-10 grid max-w-5xl gap-10 md:mt-14 md:grid-cols-3 md:gap-24'>
          <div>
            <h3 className='text-lg font-semibold'>About Us</h3>
            <p className='mt-4 max-w-xs text-sm leading-7 text-[#a9adc2]'>
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <ul className='mt-4 list-disc space-y-2 pl-4 text-sm text-[#a9adc2] marker:text-[#6e748f]'>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold'>Subscribe</h3>
            <p className='mt-4 max-w-xs text-sm leading-7 text-[#a9adc2]'>
              Subscribe to our newsletter for the latest updates.
            </p>

            <form className='mt-5 flex w-full max-w-sm'>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-11 flex-1 rounded-l-lg border border-[#222841] bg-white px-4 text-sm text-[#333] outline-none'
              />
              <button
                type='button'
                className='h-11 rounded-r-lg border border-transparent bg-linear-to-r from-[#f2addb] to-[#f2d267] px-5 text-sm font-bold text-[#111]'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className='mt-14 border-t border-white/10 pt-6 text-center text-xs text-[#8d91a8]'>
          @2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
