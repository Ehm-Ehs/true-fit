// // import { useQuizStore } from "./store/useQuizStore";
// import { scoringMatrix } from "./utils/scoringMatrix";
// import { QuizResults } from "./utils/types";

// export const Results = () => {
// //   const { results } = useQuizStore() as { results: QuizResults };

//   return (
//     <div className="results-view">
//       <div className="archetype-header">
//         <h2>You're a {results.archetypeDetails.name.toUpperCase()}</h2>
//         <p>{results.archetypeDetails.description}</p>
//       </div>

//       <div className="role-suggestions">
//         <h3>Suggested Roles</h3>
//         <ul>
//           {results.archetypeDetails.sampleRoles.map((role, i) => (
//             <li key={i}>{role}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="tag-analysis">
//         <h3>Your Top Traits</h3>
//         <div className="tag-cloud">
//           {results.matchedTags.map((tag) => (
//             <span
//               key={tag}
//               className={`tag-pill ${
//                 scoringMatrix.tagWeights[tag] === 3 ? "strong" : ""
//               }`}
//             >
//               {tag} (
//               {(results.userTags[tag] || 0) *
//                 (scoringMatrix.tagWeights[tag] || 1)}
//               pts)
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="archetype-comparison">
//         <h3>Your Alignment</h3>
//         {Object.entries(results.archetypeScores).map(([name, score]) => (
//           <div key={name} className="archetype-row">
//             <span>{name}</span>
//             <div className="score-bar">
//               <div
//                 className="score-fill"
//                 style={{ width: `${score}%` }}
//                 aria-label={`${score}% match`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
