import Header from "~/components/nav/header";
import Footer from "~/components/nav/footer";
import CategoryCard from "~/components/categoryCard";
import TraitCard from "~/components/traitCard";
import RecommendationCard from "~/components/recomendationCard";
import { useMultiQuizStore } from "~/components/store/useMultiQuizStore";
import { quizData } from "~/components/utils/quiz";
import type { ArchetypeConfig } from "~/components/utils/types";
import {
  Alchem,
  Archy,
  Decoder,
  Luminary,
  Pathfinder,
} from "public/assets/img";
import RoleCard from "~/components/card/role";
import {
  FaTasks,
  FaProjectDiagram,
  FaUsersCog,
  FaServer,
  FaTools,
  FaNetworkWired,
  FaPencilRuler,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaChartLine,
  FaShieldAlt,
  FaUserCheck,
  FaChalkboardTeacher,
  FaKeyboard,
  FaBriefcase,
} from "react-icons/fa";
import { roleMap } from "~/components/utils/role";

export default function ResultsPage() {
  const { results } = useMultiQuizStore("tech", quizData);
  console.log({ results });

  const topArchetypeKey = results?.topArchetype;
  const archetypeDetails = results?.archetypeDetails as
    | ArchetypeConfig
    | undefined;

  const categories = archetypeDetails
    ? [
        {
          name: archetypeDetails.name,
          description: archetypeDetails.description,
          roles: archetypeDetails.roles,
          coreTags: archetypeDetails.coreTags,
        },
      ]
    : [];

  // FIX: Properly extract role title and description
  const careers =
    archetypeDetails?.roles.map((role) => ({
      title: role.title,
      category: archetypeDetails.name,
      description: role.description,
    })) ?? [];

  const colors = [
    "bg-secondaryCta",
    "bg-cta",
    "bg-secondary",
    "bg-[#C1440E]",
    "bg-[#4D0279]",
    "bg-[#05CDC2]",
    "bg-[#E22897]",
    "bg-[#DDC6A7]",
    "bg-[#3E4E88]",
    "bg-[#9C27B0]",
    "bg-[#00897B]",
    "bg-[#E65100]",
    "bg-[#5E548E]",
    "bg-[#607D8B]",
    "bg-[#C2185B]",
    "bg-[#6D6875]",
    "bg-[#A16207]",
    "bg-[#3C3A36]",
  ];

  let lastColor: string | null = null;

  const randomColor = () => {
    let available = colors.filter((c) => c !== lastColor);
    let next = available[Math.floor(Math.random() * available.length)];
    lastColor = next;
    return next;
  };
  return (
    <div className=" ">
      <main className=" ">
        <section className="flex flex-col min-h-[25rem] md:min-h-[40rem] bg-subHero px-4  bg-no-repeat bg-cover  text-center h-1/2 bg-center ">
          <Header />
          <div className="px-4  max-w-5xl mx-auto flex flex-col justify-center items-center py-12">
            <p className="  mb-2 text-2xl md:text-5xl font-bold text-tertiary">
              Congratulations! Your Personalized Results Are In!.
            </p>

            <p className="  text-tertiary text-xl font-medium mb-8">
              Your TrueFit Type has been discovered!
            </p>
            <div className="max-w-lg">
              {topArchetypeKey === "pathfinder" ? (
                <Pathfinder />
              ) : topArchetypeKey === "decoder" ? (
                <Decoder />
              ) : topArchetypeKey === "luminary" ? (
                <Luminary />
              ) : topArchetypeKey === "architect" ? (
                <Archy />
              ) : topArchetypeKey === "alchemist" ? (
                <Alchem />
              ) : null}
            </div>
            <div className="py-8">
              <p className="text-secondaryCta text-6xl capitalize font-semibold">
                The {topArchetypeKey}
              </p>
              <p className=" max-w-5xl text-tertiary text-lg font-medium my-8">
                {archetypeDetails?.description}
              </p>
            </div>
          </div>
        </section>

        <div className="p-4 md:py-24 max-w-6xl mx-auto">
          <h3 className="text-ctaLight font-medium text-center text-3xl mb-4">
            Your Key Strengths
          </h3>
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8 border border-gray-200">
            <div className="gap-2 flex">
              {results?.matchedTags.map((strength, index) => {
                const color = randomColor();

                return (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-backgroundSubtle border-secondary rounded-lg"
                  >
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="capitalize" style={{ color }}>
                      {strength}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-8 mb-8 ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-secondaryCta text-3xl font-medium mb-4 text-center">
                Careers to Explore
              </h3>
              <p className="text-primary pb-6">
                {results?.archetypeDetails?.coreTags?.length
                  ? `Ideal for someone who is ${results.archetypeDetails.coreTags
                      .map((tag, index, arr) => {
                        if (index === 0) return tag;
                        if (index === arr.length - 1) return ` and ${tag}`;
                        return `, ${tag}`;
                      })
                      .join("")}.`
                  : null}
              </p>
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
                    href={roleData.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
