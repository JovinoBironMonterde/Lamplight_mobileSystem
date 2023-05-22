import React from 'react';
import './ReviewStyle.css'
function Review() {
  return (
   <section className="ReviewSection text-center">
    <div className="review-container">
        <h1 className='-mt-40 leading-none'>Read the reviews</h1>
        <br/><br/><br/><br/>
        <div className="review-content flex">
            <div className="review p-25 text-[#09f2fb] text-left">
                <i className="fa-sharp fa-solid fa-quote-left"></i>
                <p className='mt-10 ' >Testimonials are short
                    quotes from people who
                    love your brand. It's a great
                    way to convince customers
                    to try your services.
                </p>
                <h3 className='text-left mt-10'>Ingrid Correa</h3>
            </div>

            <div className="review p-25 text-[#09f2fb] text-left">
                <i className="fa-sharp fa-solid fa-quote-left"></i>
                <p className='mt-10'>Testimonials are short
                    quotes from people who
                    love your brand. It's a great
                    way to convince customers
                    to try your services.
                </p>
                <h3 className='text-left  mt-10'>Hilford Press</h3>
            </div>

            <div className="review p-25  text-[#09f2fb] text-left">
                <i className="fa-sharp fa-solid fa-quote-left"></i>
                <p className='mt-10'>Testimonials are short
                    quotes from people who
                    love your brand. It's a great
                    way to convince customers
                    to try your services.
                </p>
                <h3 className='text-left  mt-10'>Daichi Hamada</h3>
            </div>
        </div>
    </div>
   </section>
  );
}

export default Review;
