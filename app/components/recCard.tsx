import React from "react";

interface RecProps {
  title: string;
  description: string;
  tags: string[];
}

const RecCard: React.FC<RecProps> = ({ title, description, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          View Details
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`bg-${tag
              .toLowerCase()
              .replace(/\s+/g, "-")}-500 text-white px-2 py-1 rounded text-xs`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecCard;
