import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from '../assets/mihael-stojcevic-kSeox4zl9GI-unsplash.jpg';
import banner1 from '../assets/pew-nguyen-8DknNbYe1O0-unsplash.jpg'
import banner2 from '../assets/kelly-sikkema-SoGu-cMfM5c-unsplash.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const images = [
  banner,
  banner1,
  banner2,
];

export default function HeroSlider() {
  const { user } = useAuth();
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
              className="w-full bg-cover bg-center h-[60vh] md:h-[75vh] lg:h-screen"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-60 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-xl md:max-w-2xl pointer-events-auto px-4">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Learn a skill. Teach a skill.</h1>
            <p className="mb-6 text-white/90 text-sm md:text-base">
              Find local and remote skill providers or offer your expertise to others.
            </p>
            <div>
              {
                !user && 
                <Link to="/login" className="btn btn-primary px-6 py-2">Get Started</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
