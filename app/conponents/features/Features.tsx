
import React from 'react';
import './FeatureStyle.css'

function Features() {
  return (
    <section className="featuresSection ">
        <div className="features-container">
            <h1 className='text-[black] leading-none'>BuyBooster's <br/> Best Features</h1>
        </div>

        <div className="features-content flex">
            <div className="features p-10">
                <h3 className='p-2 w-16 h-16 rounded-full justify-center flex items-center bg-[#00c4cc]'>1</h3>
                <p className='mt-10'>Write here a key feature of the
                    app or software that is being
                    advertised here.
                    </p>
            </div>

            <div className="features p-10">
                <h3  className='p-2 w-16 h-16 rounded-full justify-center flex items-center bg-[#00c4cc]'>2</h3>
                <p className='mt-10'>Write here a key feature of the
                    app or software that is being
                    advertised here.
                    </p>
            </div>

            <div className="features p-10">
                <h3  className='p-2 w-16 h-16 rounded-full justify-center flex items-center bg-[#00c4cc]'>3</h3>
                <p className='mt-10'>Write here a key feature of the
                    app or software that is being
                    advertised here.
                    </p>
            </div>
        </div>

    </section>
  );
}

export default Features;
