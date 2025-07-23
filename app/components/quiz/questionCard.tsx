import React from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="bg-white sm:p-6 flex justify-center ">
      <div className="flex flex-col justify-center items-center mx-auto max-w-5xl mt-24">
        <h2 className="text-primary sm:text-3xl font-semibold mb-4">
          {question}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg shadow-md p-10  ">
          {options.map((option, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 text-left text-sm sm:text-base ${
                selectedOption === option
                  ? "border-secondary bg-indigo-50"
                  : "border-gray-300"
              }`}
              onClick={() => onSelect(option)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                <div
                  className={`w-4 h-3 xs:w-3 sm:w-5 sm:h-5 rounded-full border-2 ${
                    selectedOption === option
                      ? "border-secondary bg-secondary"
                      : "border-gray-300"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
