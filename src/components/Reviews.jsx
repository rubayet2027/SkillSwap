import React from 'react';

const Reviews = () => {
    return (
        <section className="bg-[#DEECFF] pt-20 pb-40 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-5xl font-bold pb-10">What our community says</h1>
          <p className="text-gray-600 mt-2 pb-3">Short stories from learners and providers who found value on SkillSwap.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote data-aos="fade-up" className="p-6 bg-base-100 rounded-lg shadow">
            <p className="text-gray-800">"I booked a one-on-one mentoring session and learned actionable tips in one hour — highly recommend!"</p>
            <footer className="mt-4 text-sm text-gray-600">— Sarah K., Frontend Developer</footer>
          </blockquote>

          <blockquote data-aos="fade-up" data-aos-delay="100" className="p-6 bg-base-100 rounded-lg shadow">
            <p className="text-gray-800">"As a provider I connected with motivated learners and filled my schedule. The platform made booking easy."</p>
            <footer className="mt-4 text-sm text-gray-600">— Jamal R., UX Instructor</footer>
          </blockquote>

          <blockquote data-aos="fade-up" data-aos-delay="200" className="p-6 bg-base-100 rounded-lg shadow">
            <p className="text-gray-800">"Great way to trade skills — I taught photography and learned web basics in return."</p>
            <footer className="mt-4 text-sm text-gray-600">— Priya M., Photographer</footer>
          </blockquote>
        </div>
      </section>
    );
};

export default Reviews;