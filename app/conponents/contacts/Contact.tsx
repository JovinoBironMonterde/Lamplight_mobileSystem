import Image from 'next/image';
import React from 'react';
import './ContactStyle.css'
import contactimg from '../../../public/assets/images/logo2.png';

function Contact() {
  return (
   <section className="contactSection">
      <div className="contact-container flex items-center">
        <div className="contact-info block p-10">
          <div className='contactdiv bg-gray-400'>
            <h1>Contact</h1>
          </div>
          <div className='contactdiv bg-white mt-1 p-8'>
            <h3>Phone</h3>
           <p>(123) 456-7890</p>
          </div>
          <div className='contactdiv bg-white mt-1 p-8'>
          <h3>Email</h3>
           <p>hello@reallygreatsite.com</p>
          </div>
          
          <div className='contactdiv bg-white mt-1 p-8'>
          <h3>Social</h3>
           <div></div>
          </div>
        </div>
        <div className="contact-img p-24">
          <Image className='m-0' src={contactimg}  alt='/' />
        </div>
      </div>
   </section>
  );
}

export default Contact;
