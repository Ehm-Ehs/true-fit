import React from "react";
import ActionCard from "~/components/cta";
import Footer from "~/components/nav/footer";
import Header from "~/components/nav/header";
import RecCard from "~/components/recCard";
import TraitBadge from "~/components/traitBagde";

const ProfilePage: React.FC = () => {
  const actions = [
    {
      icon: (
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
      ),
      title: "Retake Quiz",
      description: "Discover new insights with an updated assessment.",
      buttonLabel: "Start New Quiz",
    },
    {
      icon: (
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
      ),
      title: "Explore Courses",
      description: "Find courses to build skills in your desired career path.",
      buttonLabel: "Browse Courses",
    },
    {
      icon: (
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
      ),
      title: "Connect with Advisor",
      description: "Get personalized guidance from a career expert.",
      buttonLabel: "Find an advisor",
    },
  ];
  const traits = [
    {
      title: "Analytical Thinker",
      description:
        "You excel at breaking down complex issues into manageable parts.",
      color: "indigo",
    },
    {
      title: "Strategic Planner",
      description:
        "You are skilled at creating long-term plans and executing them effectively.",
      color: "yellow",
    },
  ];
  const recentRecommendations = [
    {
      title: "AI/Machine Learning Engineer",
      description:
        "Develops and designs intelligent systems, algorithms, and models that enable machines to perform tasks requiring human intelligence.",
      tags: ["Tech", "Innovation", "Data Science", "Problem Solving"],
    },
    {
      title: "Environmental Consultant",
      description:
        "Advises on environmental regulations and best practices to ensure compliance with legal requirements and promote sustainability goals.",
      tags: ["Sustainability", "Consulting", "Strategy", "Policy"],
    },
  ];
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/30 "
              alt="Profile Picture"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h3 className="text-gray-800 font-semibold">
                Welcome back, Alex Johnson!
              </h3>
              <p className="text-gray-600 text-sm">
                Dive into your journey. Discover your progress, insights, and
                tailored recommendations just for you.
              </p>
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto p-4">
          {/* Recent Career Recommendations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recent Career Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentRecommendations.map((rec, idx) => (
                <RecCard key={idx} {...rec} />
              ))}
            </div>
          </section>

          {/* Past Quiz Answers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Past Quiz Answers
            </h2>
            <p className="text-gray-600 mb-4">
              Review your responses from previous quizzes.
            </p>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View Previous Quizzes
            </button>
          </section>

          {/* Key Skills & Traits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Key Skills & Traits
            </h2>
            <p className="text-gray-600 mb-4">
              Insights into your strengths based on your quiz responses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {traits.map((trait, idx) => (
                <TraitBadge key={idx} {...trait} />
              ))}
            </div>
          </section>

          {/* Continue Your Journey */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Continue Your Journey
            </h2>
            <p className="text-gray-600 mb-4">
              Ready for more? Explore new paths, refine your insights, or
              connect with a career expert.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {actions.map((action, idx) => (
                <ActionCard key={idx} {...action} />
              ))}
            </div>
          </section>
        </main>
      </div>{" "}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Continue Your Journey
        </h3>
        <p className="text-gray-600 mb-6">
          Receiving the move I'd spent on your skills and engagement, we
          continued with a career approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Explore Courses</h4>
            <p className="text-sm text-gray-600 mb-3">
              Reductions to help with your incremental careers.
            </p>
            <button className="text-blue-600 text-sm font-medium">
              Browse Now
            </button>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">
              Connect with Adviser
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Our professional guidance helps us enter regular meetings
              together.
            </p>
            <button className="text-green-600 text-sm font-medium">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
