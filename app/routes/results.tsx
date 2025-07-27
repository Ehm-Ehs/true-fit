import { useEffect, useState } from "react";
import Header from "~/components/nav/header";
import Footer from "~/components/nav/footer";
import RoleCard from "~/components/card/role";
import { useMultiQuizStore } from "~/components/store/useMultiQuizStore";
import { quizData } from "~/components/utils/quiz";
import type { ArchetypeConfig, QuizResults } from "~/components/utils/types";
import {
  Alchem,
  Archy,
  Decoder,
  Luminary,
  Pathfinder,
} from "public/assets/img";
import { FaBriefcase } from "react-icons/fa";
import { roleMap } from "~/components/utils/role";

export default function ResultsPage() {
  // Read from Zustand (read-only)
  const { results: zustandResults } = useMultiQuizStore("tech", quizData);

  // Local state for managing results
  const [results, setResults] = useState<QuizResults | null>(zustandResults);

  const topArchetypeKey = results?.topArchetype;
  const archetypeDetails = results?.archetypeDetails;
  const storageKey = "truefit_results";

  useEffect(() => {
    // Initialize from sessionStorage if no results
    if (!results) {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as QuizResults;
          setResults(parsed);
        } catch (err) {
          console.error("Failed to parse stored results:", err);
        }
      } else if (zustandResults) {
        // Fall back to Zustand results if available
        setResults(zustandResults);
      }
    }

    // Save to sessionStorage when results change
    if (results) {
      sessionStorage.setItem(storageKey, JSON.stringify(results));
    }
  }, [results, zustandResults]);
  const careers =
    archetypeDetails?.roles.map((role) => ({
      title: role.title,
      category: archetypeDetails.name,
      description: role.description,
      why: role.why,
    })) ?? [];

  const colors = [
    "#C1440E",
    "#4D0279",
    "#05CDC2",
    "#E22897",
    "#DDC6A7",
    "#3E4E88",
    "#9C27B0",
    "#00897B",
    "#E65100",
    "#5E548E",
  ];

  let lastColor: string | null = null;
  const randomColor = () => {
    const available = colors.filter((c) => c !== lastColor);
    const next = available[Math.floor(Math.random() * available.length)];
    lastColor = next;
    return next;
  };

  const ArchetypeVisual = () => {
    switch (topArchetypeKey) {
      case "pathfinder":
        return <Pathfinder />;
      case "decoder":
        return <Decoder />;
      case "luminary":
        return <Luminary />;
      case "architect":
        return <Archy />;
      case "alchemist":
        return <Alchem />;
      default:
        return null;
    }
  };

  return (
    <div>
      <main>
        <section className="flex flex-col min-h-[25rem] md:min-h-[40rem] bg-subHero bg-cover bg-center bg-no-repeat px-4 text-center">
          <Header />
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-12">
            <p className="text-2xl md:text-5xl font-bold text-tertiary mb-2">
              Congratulations! Your Personalized Results Are In!
            </p>
            <p className="text-xl font-medium text-tertiary mb-8">
              Your TrueFit Type has been discovered!
            </p>
            <div className="max-w-lg">
              <ArchetypeVisual />
            </div>
            <div className="py-8">
              <h1 className="text-secondaryCta text-6xl capitalize font-semibold">
                The {topArchetypeKey}
              </h1>
              <p className="max-w-3xl mx-auto text-tertiary text-lg font-medium mt-6">
                {archetypeDetails?.description}
              </p>
            </div>
          </div>
        </section>

        <section className="p-4 md:py-24 max-w-6xl mx-auto">
          <h3 className="text-ctaLight text-3xl text-center font-medium mb-4">
            Your Key Strengths
          </h3>
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8 border border-gray-200">
            <div className="flex gap-2 flex-wrap">
              {results?.matchedTags.map((strength, index) => {
                const color = randomColor();
                return (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 rounded-lg border"
                    style={{ borderColor: color }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: color }}
                    />
                    <span style={{ color }} className="capitalize">
                      {strength}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-secondaryCta text-3xl font-medium mb-4">
                Careers to Explore
              </h3>
              {archetypeDetails?.coreTags?.length ? (
                <p className="text-primary">
                  Ideal for someone who is{" "}
                  {archetypeDetails.coreTags
                    .map((tag, i, arr) =>
                      i === arr.length - 1 && i !== 0
                        ? ` and ${tag}`
                        : i > 0
                        ? `, ${tag}`
                        : tag
                    )
                    .join("")}
                  .
                </p>
              ) : null}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {careers.map((career, index) => {
                const roleData = roleMap[career.title] ?? {
                  icon: <FaBriefcase />,
                  link: undefined,
                };

                return (
                  <RoleCard
                    key={index}
                    title={career.title}
                    description={career.description}
                    icon={roleData.icon}
                    why={career.why}
                    href={roleData.link}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
