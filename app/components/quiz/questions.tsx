import React, { useState } from "react";
import { useMultiQuizStore } from "../store/useMultiQuizStore";
import { QuestionProps, QuizOption } from "../utils/types";
import QuestionCard from "./questionCard";
import { useNavigate } from "@remix-run/react";

export const Question = ({ quizKey, quizData }: QuestionProps) => {
  const {
    currentQuestion,
    currentSection,
    progress,
    answerQuestion,
    phase,
    setPhase,
  } = useMultiQuizStore(quizKey, quizData);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (label: string) => {
    setSelectedOption(label);

    const selected = currentQuestion.options.find(
      (opt: QuizOption) => opt.text === label
    );

    if (selected) {
      answerQuestion(selected, currentQuestion.id);

      const currentSectionIndex = quizData.sections.findIndex(
        (section) => section.title === currentSection.title
      );

      const currentQuestionIndex = currentSection.questions.findIndex(
        (q) => q.id === currentQuestion.id
      );

      const isLastSection =
        currentSectionIndex === quizData.sections.length - 1;
      const isLastQuestion =
        currentQuestionIndex === currentSection.questions.length - 1;

      if (isLastSection && isLastQuestion) {
        navigate("/results");
      }
    }
  };

  const randomTextColor = () => {
    const colors = [
      "text-secondaryCta",
      "text-cta",
      "text-secondary",
      "text-[#C1440E]",
      "text-[#4D0279]",
      "text-[#05CDC2]",
      "text-[#E22897]",
      "text-[#DDC6A7]",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const randomColor = () => {
    const colors = [
      "text-[#1A1D29]",
      "text-[#4D1431]",
      "text-[#2B2722]",
      "text-[#18365D]",
      "text-[#0B0201]",
      "text-[#402315]",
      "text-[#3B2214]",
      "text-[#030A1C]",
      "text-[#563457]",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  if (phase === "intro") {
    return (
      <div
        className="min-h-screen p-6 flex flex-col justify-center items-center text-center "
        onClick={() => setPhase("question")}
      >
        <h2 className={`sm:text-5xl font-bold mb-2 ${randomColor()}`}>
          {currentSection.title}
        </h2>
        {currentSection.subtitle && (
          <p className={`${randomTextColor()} text-sm sm:text-base`}>
            {currentSection.subtitle}
          </p>
        )}
      </div>
    );
  }

  // Extract string labels from QuizOption[]
  const stringOptions = currentQuestion.options.map((opt) => opt.text);

  return (
    <div className="min-h-screen p-6">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-secondary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <QuestionCard
        question={currentQuestion.text}
        options={stringOptions} // ✅ converted to string[]
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />
    </div>
  );
};
