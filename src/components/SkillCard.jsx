import React from 'react';
import { Link } from 'react-router-dom';

export default function SkillCard({ skill }) {
  if (!skill) return null;
  return (
    <div className="card bg-base-100 w-56 sm:w-64 md:w-72 lg:w-80 shadow-sm mx-auto h-full flex flex-col">
      <figure className="overflow-hidden rounded-t-lg">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-36 md:h-48 object-cover"
        />
      </figure>
      <div className="card-body flex flex-col flex-1">
        <h2 className="card-title">{skill.skillName}</h2>
        <p className="text-sm md:text-base">{skill.description}</p>
        <div className='flex justify-between text-sm mt-2'>
          <div>
            <strong>Rating :</strong> {skill.rating} ⭐
          </div>
          <div>
            <strong>Price :</strong> {skill.price} $
          </div>
        </div>
        <div className="card-actions justify-end mt-auto">
          <button className="btn bg-[#0f5394] text-white">View Details</button>
        </div>
      </div>
    </div>
  );
}
