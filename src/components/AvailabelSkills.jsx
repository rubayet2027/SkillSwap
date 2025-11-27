import React from 'react';
import SkillCard from './SkillCard';

const AvailabelSkills = ({ skills, loading, error }) => {
    return (
        <section
            className="skills-list container flex items-center justify-center flex-col pb-20 max-w-screen bg-[#DEECFF]"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <div
                className='mt-20 mb-12 text-5xl font-bold text-[#000000]'
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                Available Skills
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl lg:max-w-7xl gap-6"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
            >
                {loading && <p>Loading skills…</p>}
                {error && <p className="error">{error}</p>}

                {!loading && !error && skills.slice(0, 6).map((s, index) => (
                    <div
                        key={s.skillId}
                        className="h-full flex"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={index * 120}
                    >
                        <SkillCard skill={s} />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default AvailabelSkills;