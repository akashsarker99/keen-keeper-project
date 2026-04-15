import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] mt-10'>
            <footer className='text-center pt-10 space-y-3'>
                <h1 className='text-2xl md:text-4xl font-bold text-white'>KeenKeeper</h1>
                <p className='text-white text-sm md:text-md'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className='text-center'>
                    <h2 className='text-white mb-2.5 font-semibold'>Social Links</h2>
                    <div className='flex gap-2.5 justify-center'>
                       <span className='text-white text-2xl'><FaInstagramSquare /></span>
                       <span className='text-white text-2xl'><FaFacebook /></span>
                       <span className='text-white text-2xl'> <RiTwitterXLine /></span>
                        
                       
                    </div>
                <div className='border-t border-gray-500 mt-6 py-6 px-8 container mx-auto flex flex-col md:flex-row items-center gap-3 md:justify-between'>
                    <p className='text-white text-sm opacity-50'>&copy; 2026 Keenkeeper. All rights reserved.</p>
                    <div className='flex gap-6'>
                     <p className='text-white text-sm opacity-50'>Privacy Policy</p>
                     <p className='text-white text-sm opacity-50'>Terms of Service</p>
                     <p className='text-white text-sm opacity-50'>Cookies</p>
                    </div>
               </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;