import React from "react";

interface CategoryProps {
  name: string;
  description: string;
  sampleRoles: string[];
  coreTags: string[];
}

const CategoryCard: React.FC<CategoryProps> = ({
  name,
  description,
  sampleRoles,
  coreTags,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-indigo-500 mr-2"
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
          <span className="font-semibold text-lg">{name}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm">{description}</p>

      {sampleRoles.length > 0 && (
        <div>
          <p className="text-xs text-gray-500 font-medium mb-1">
            Sample Roles:
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            {sampleRoles.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        </div>
      )}

      {coreTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {coreTags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
