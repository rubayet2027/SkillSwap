import React from 'react';

export default function HowItWorks() {
  return (
    <div className="hero bg-[#DEECFF] py-30">
      <div
        className="hero-content flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 px-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <img
          src="https://i.ibb.co.com/TBKZ4Zhp/thought-catalog-505eect-W54k-unsplash.jpg"
          className="w-full md:w-1/2 lg:w-5/12 max-w-md rounded-lg shadow-2xl drop-shadow-2xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        />

        <div
          className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pt-10"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h1 className="text-4xl md:text-5xl font-bold">How It Works</h1>

          <p className="py-6 text-base md:text-lg">
            Discover skills, connect with local providers, and grow together.<br />
            Simple, fast and beginner-friendly. Build meaningful collaborations, <br />
            support local talent, and take your projects from idea to reality.
          </p>
        </div>
      </div>
    </div>
  );
}

