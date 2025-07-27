import { createStore } from 'zustand/vanilla';
import type {
  ArchetypeConfig,
  QuizData,
  QuizQuestion,
  QuizResults,
  QuizSection,
  QuizStore
} from '../utils/types';
import { scoringMatrix } from '../utils/scoringMatrix';

const getInitialState = (quizData: QuizData) => ({
  quizData,
  currentSection: quizData.sections[0],
  currentQuestion: quizData.sections[0].questions[0],
  userTags: {} as Record<string, number>,
  questionHistory: [],
  progress: 0,
  results: null,
  phase: 'intro' as 'intro' | 'question'
});

export const createQuizStore = (quizData: QuizData) =>
  createStore<QuizStore>((set, get) => ({
    ...getInitialState(quizData),

    setPhase: (phase) => set({ phase }),

    answerQuestion: (option, questionId) => {
      set(state => {
        const newTags = { ...state.userTags };
        option.tags.forEach(tag => {
          newTags[tag] = (newTags[tag] || 0) + 1;
        });

        const updatedHistory = [
          ...state.questionHistory,
          { questionId, answer: option.text, tags: option.tags }
        ];

        return {
          userTags: newTags,
          questionHistory: updatedHistory,
          progress: calculateProgress(updatedHistory.length, quizData)
        };
      });

      const next = getNextQuestion(get().currentSection, get().currentQuestion, quizData);

      if (next) {
        set({
          currentQuestion: next.question,
          currentSection: next.section,
          phase: next.section !== get().currentSection ? 'intro' : 'question'
        });
      } else {
        set({ results: calculateResults(get().userTags) });
      }
    },

    calculateResults: () => calculateResults(get().userTags),
  }));

// Helpers
const calculateProgress = (answered: number, quizData: QuizData) => {
  const total = quizData.sections.reduce((sum, s) => sum + s.questions.length, 0);
  return (answered / total) * 100;
};

const getNextQuestion = (
  currentSection: QuizSection,
  currentQuestion: QuizQuestion,
  quizData: QuizData
) => {
  const sectionIdx = quizData.sections.indexOf(currentSection);
  const questionIdx = currentSection.questions.indexOf(currentQuestion);

  if (questionIdx < currentSection.questions.length - 1) {
    return {
      question: currentSection.questions[questionIdx + 1],
      section: currentSection
    };
  }

  if (sectionIdx < quizData.sections.length - 1) {
    const nextSection = quizData.sections[sectionIdx + 1];
    return {
      question: nextSection.questions[0],
      section: nextSection
    };
  }

  return null; 
};

const calculateResults = (userTags: Record<string, number>): QuizResults => {
  const weightedScores = scoringMatrix.archetypes.map(archetype => ({
    name: archetype.name,
    score: [...archetype.coreTags, ...archetype.secondaryTags, ...archetype.tertiaryTags].reduce(
      (sum, tag) => sum + ((userTags[tag] || 0) * (scoringMatrix.tagWeights[tag] || 1)),
      0
    ),
    config: archetype
  }));

  const maxScore = Math.max(...weightedScores.map(x => x.score));
  const normalizedScores = Object.fromEntries(
    weightedScores.map(({ name, score }) => [
      name,
      maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
    ])
  );

  const [topResult] = weightedScores.sort((a, b) => b.score - a.score);

  return {
    topArchetype: topResult.name,
    archetypeScores: normalizedScores,
    sortedTags: getSortedTags(userTags),
    matchedTags: getMatchedTags(topResult.config, userTags),
    userTags,
    archetypeDetails: topResult.config
  };
};

const getSortedTags = (userTags: Record<string, number>) =>
  Object.entries(userTags)
    .map(([tag, count]) => ({
      tag,
      score: count * (scoringMatrix.tagWeights[tag] || 1)
    }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.tag);

const getMatchedTags = (archetype: ArchetypeConfig, userTags: Record<string, number>) => [
  ...archetype.coreTags.filter(tag => userTags[tag]),
  ...archetype.secondaryTags.filter(tag => userTags[tag]),
  ...archetype.tertiaryTags.filter(tag => userTags[tag])
];
