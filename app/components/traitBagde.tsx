import React from "react";

interface TraitBadgeProps {
  title: string;
  description: string;
  color: string;
}

const TraitBadge: React.FC<TraitBadgeProps> = ({
  title,
  description,
  color,
}) => {
  return (
    <div
      className={`bg-${color}-500 text-white rounded-lg p-4 flex items-center space-x-2`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
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
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TraitBadge;
