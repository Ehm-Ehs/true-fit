import { useState } from "react";
import { useNavigate } from "@remix-run/react";

import InterestCard from "~/components/interestCard";
import Footer from "~/components/nav/footer";
import Header from "~/components/nav/header";

const interests = [
  {
    title: "Technology",
    description:
      "Includes both technical and non-technical roles in technology. Think: building, designing, scaling, analyzing digital products",
  },
  {
    title: "Vocational",
    description:
      "Hands-on, skilled trades or craft-focused roles. Often creative or physical. No formal college degree required but high skill.",
  },
  {
    title: "Academic",
    description:
      "Driven by learning, theory, and depth of knowledge. What you study becomes the basis of your specialization or niche",
  },
  {
    title: "Entrepreneurial",
    description:
      "Self-driven, ownership-oriented roles within a specific domain. These roles are cross-cutting and domain-agnostic",
  },
  {
    title: "Freestyle",
    description:
      "For generalists or outliers. People who don’t fit neatly into a box, or want to explore hybrid paths",
  },
];

export default function Interests() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected) {
      navigate(`/quiz/${selected.toLowerCase()}`);
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-primary text-3xl font-bold text-center mb-4">
          Pick a path to explore
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Select the one that state the category you want
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <InterestCard
              key={interest.title}
              {...interest}
              isSelected={selected === interest.title}
              onClick={() => setSelected(interest.title)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`px-6 py-3 rounded ${
              selected
                ? "bg-secondaryCta text-gray-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next: Start Quiz
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
