import React from 'react';
import bannerMain from '../../../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className='container mx-auto px-4 md:px-0'>
            <div className='relative overflow-hidden rounded-3xl bg-[#0b0b10] min-h-120 md:min-h-135 flex items-center justify-center'>
                <div className='pointer-events-none absolute -top-24 right-0 h-90 w-90 rounded-full bg-[radial-gradient(circle,rgba(255,196,153,0.55)_0%,rgba(255,196,153,0.1)_45%,transparent_72%)]'></div>
                <div className='pointer-events-none absolute -bottom-25 -left-22.5 h-90 w-90 rounded-full bg-[radial-gradient(circle,rgba(103,140,255,0.6)_0%,rgba(141,220,255,0.2)_45%,transparent_72%)]'></div>
                <div className='relative z-10 w-full max-w-4xl text-center px-5 py-12 md:py-16'>
                    <img
                        src={bannerMain}
                        alt='Cricket'
                        className='mx-auto mb-5 w-40 md:w-48'
                    />

                    <h1 className='text-white text-3xl md:text-5xl font-bold leading-tight'>
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className='mt-4 text-[#A9A9B8] text-lg md:text-2xl'>
                        Beyond Boundaries Beyond Limits
                    </p>

                    <div className='mt-7 inline-flex rounded-2xl border border-[#f8f8f8]/50 p-0.75'>
                        <button className='btn h-12 min-h-12 rounded-xl border-0 bg-linear-to-r from-[#f4a7dc] to-[#f2d260] px-7 text-base font-bold text-[#151515] shadow-none hover:brightness-95'>
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;