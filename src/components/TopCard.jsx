import React from 'react';
import { FaEnvelope, FaStar } from 'react-icons/fa';

export default function TopCard({ skill }) {
    if (!skill) return null;

    const { providerName, providerEmail, rating, image } = skill;

    return (
        <div className="card bg-base-100 shadow-sm p-4 w-full h-50 sm:w-80 md:w-96">
            <div className="flex flex-col items-center gap-6 p-4">
                <div>
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                        {image ? (
                            <img src={image} alt={`${providerName} avatar`} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-md font-semibold">{providerName}</h4>
                            <p className="text-sm text-gray-600"><FaEnvelope className="inline mr-1" /> {providerEmail}</p>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center gap-1 text-yellow-500">
                                <FaStar /> <span className="font-medium text-sm">{rating ?? '—'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

