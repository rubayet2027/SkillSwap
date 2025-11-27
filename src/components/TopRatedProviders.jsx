import React from 'react';
import TopCard from './TopCard';

const TopRatedProviders = ( { skills, loading, error }) => {
  return (
            <section
                className="skills-list w-full flex items-center justify-center flex-col pb-40 bg-[#DEECFF] max-h-screen"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <div
                    className='mt-20 mb-12 text-5xl font-bold text-[#000000]'
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    Top Rated Providers
                </div>
    
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl lg:max-w-7xl gap-4 w-full px-4 md:px-8"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="150"
                >
                    {loading && <p>Loading skills…</p>}
                    {error && <p className="error">{error}</p>}
    
                    {!loading && !error && skills.slice(0, 4).map((s, index) => (
                        <div
                            key={s.skillId}
                            className="h-full flex"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 120}
                        >
                            <TopCard skill={s} />
                        </div>
                    ))}
                </div>
            </section>

  );
};

export default TopRatedProviders;