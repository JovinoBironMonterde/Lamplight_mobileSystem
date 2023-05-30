import Image from 'next/image';
import React from 'react';
import './AboutStyle.css'
import aboutImg from '../../../public/assets/images/image3.png';


function About() {
  return (
    <section className="aboutSection flex items-center" id='about'>
        <div className="about-container flex items-center">
            <div className="about-img p-10 ">
                <Image className=' m-0' src={aboutImg}  alt='/' />
            </div>
            <div className="about-text p-10 ">
                <h1 className='leading-none text-[black]'>A little <br/> about LMS</h1>
                <p>Write a paragraph that talks about your
                    company here. You can talk about your
                    companys background, history, mission,
                    vision, or philosophy. Anything that will
                    introduce your brands persona to your
                    clients. This will help build a connection
                    between you and them, that hopefully
                    leads into a working relationship.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;
