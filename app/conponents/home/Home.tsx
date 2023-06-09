import Image from 'next/image';
import React from 'react';
import './HomeStyle.css'
import profile from '../../../public/assets/images/mobile-image.png';
import logo from '../../../public/assets/images/logo.png';


function Home() {
  return (
    <section className='homeSection flex items-center justify-center'>
      <div className='home-container flex justify-evenly items-center '>
        <div className='herotext w-full pl-10'>
          <div className="logo my-10 -mt-16">
          <Image src={logo}  alt='/' />
          </div>
          <h1>Buy without </h1>
          <h1>lifting a finger.</h1>
          <br/>    <br/>
          <button>Download the App</button>
        </div>

        <div className='hero-image '>
             <Image className='m-0' src={profile}  alt='/' />
        </div>
      
      </div>
    </section>
  );
}

export default Home;
