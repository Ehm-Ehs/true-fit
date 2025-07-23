import React from "react";

interface RecProps {
  title: string;
  description: string;
}

const RecommendationCard: React.FC<RecProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full">
        Learn More →
      </button>
    </div>
  );
};

export default RecommendationCard;
