import React from "react";

interface ActionCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  buttonLabel: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <div className="flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
