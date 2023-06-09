import Image from 'next/image';
import React from 'react';
import './BlogStyle.css'
import BlogImage from '../../../public/assets/images/image2.png';

function Blog() {
  return (
    <section className='BlogSection '>
        <div className="Blog-container flex ">
            <div className="blog-text p-10">
                <h1 className='text-[black] leading-none'>Say Hello to BuyBooster</h1>
                <p className='text-2xl'>Whats special about your product, service, or
                    company? Use this space to highlight the things
                    that set you apart from your competition,
                    whether its a special feature, a unique
                    philosophy, or awards and recognition that you
                    have received. Think of this as your elevator
                    pitch to get the readers attention.</p>
            </div>
            <div className="blog-img p-10 ">
            <Image className='m-0' src={BlogImage}  alt='/' />
            </div>
        </div>
    </section>
  );
}

export default Blog;
