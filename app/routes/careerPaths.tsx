// // src/components/common/Card.tsx
// import React from "react";

// interface CardProps {
//   title: string;
//   description?: string;
//   children?: React.ReactNode;
//   footer?: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({ title, description, children, footer }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
//       <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//       {description && <p className="text-sm text-gray-600">{description}</p>}
//       {children}
//       {footer && <div className="pt-2">{footer}</div>}
//     </div>
//   );
// };

// export default Card;

// // src/pages/CareerPathResults.tsx
// import React from "react";
// import Card from "../components/common/Card";

// const traits = [
//   { name: "Analytical Thinking", score: 85 },
//   { name: "Empathy & Communication", score: 70 },
//   { name: "Creativity & Innovation", score: 92 },
//   { name: "Leadership Potential", score: 70 },
//   { name: "Problem Solving", score: 88 },
//   { name: "Detail-Oriented", score: 65 },
// ];

// const CareerPathResults: React.FC = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold">
//         Your Ideal Career Path: <span className="text-blue-600">Technology & Innovation</span>
//       </h1>
//       <p className="text-sm text-gray-600 mt-1">
//         Based on your quiz results, you show a strong aptitude for analytical thinking, problem-solving, and a keen
//         interest in emergent fields. Your path is set to reshape the future.
//       </p>

//       {/* Top Categories */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
//         {[
//           { title: "Tech Innovator", description: "Leading the future with groundbreaking technology and software solutions." },
//           { title: "Creative Professional", description: "Crafting compelling visual and conceptual experiences through product and design." },
//           { title: "Business Strategist", description: "Shaping organizational success through data-driven decisions and leadership." },
//           { title: "Social Impact Leader", description: "Driving positive change and fostering community development." },
//           { title: "Research Scientist", description: "Exploring new frontiers in science and contributing to knowledge." },
//         ].map((cat, i) => (
//           <Card key={i} title={cat.title} description={cat.description} footer={<a href="#" className="text-sm text-blue-500">View More</a>} />
//         ))}
//       </div>

//       {/* Traits Summary */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">Matched Traits Summary</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {traits.map((trait) => (
//             <Card
//               key={trait.name}
//               title={trait.name}
//               children={<div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                 <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${trait.score}%` }}></div>
//               </div>}
//               footer={<span className="text-sm text-gray-500">{trait.score}%</span>}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerPathResults;
