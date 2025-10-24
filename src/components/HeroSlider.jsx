import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from '../assets/mihael-stojcevic-kSeox4zl9GI-unsplash.jpg';
import banner1 from '../assets/pew-nguyen-8DknNbYe1O0-unsplash.jpg'
import banner2 from '../assets/kelly-sikkema-SoGu-cMfM5c-unsplash.jpg';
import { Link } from 'react-router';

const images = [
  banner,
  banner1,
  banner2,
];

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="hero-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="min-h-screen"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-60 flex items-center justify-center h-full">
          <div className="text-center max-w-md pointer-events-auto px-4">
            <h1 className="mb-5 text-5xl font-bold text-white">Learn a skill. Teach a skill.</h1>
            <p className="mb-5 text-white/90">
              Find local and remote skill providers or offer your expertise to others.
            </p>
            <div>
              <Link to="/login" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
