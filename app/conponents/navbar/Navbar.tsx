import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './NavbarStyle.css'
import logo from '../../../public/assets/images/logo.png';



function Navbar() {
  return (
    <div className=' w-full flex justify-center items-center fixed top-0 h-20 p-6 '>
      <div className='w-full max-w-screen-xl  items-center flex justify-between'>
          <div className="logo px-4">
          <Image src={logo}  alt='/' />
          </div>
      
            <ul  className='hidden md:flex sm:block' >
             <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#blog'>Blog</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='#features'>Features</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='#reviews'>Reviews</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#about'>About</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='#contact'>Contact</Link>
              </li>
            </ul>
      </div>
    </div>
    
  );
}

export default Navbar;
