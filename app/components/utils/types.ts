export type Tag = string;

export interface QuizOption {
  text: string;
  tags: Tag[];
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizSection {
  title: string;
  subtitle?: string;
  questions: QuizQuestion[];
}

export interface QuizData {
  sections: QuizSection[];
}

export interface NextQuestion {
  question: QuizQuestion;
  section: QuizSection;
}
interface Role {
  title: string;
  description: string;
  why:string;
}

export interface ArchetypeConfig {
  name: string;
  description: string;
  coreTags: Tag[];
  secondaryTags: Tag[];
  tertiaryTags: Tag[];
  roles: Role[];}

export interface ScoringMatrix {
  archetypes: ArchetypeConfig[];
  tagWeights: Record<Tag, number>;
}

export interface QuizResults {
  topArchetype: string;
  archetypeScores: Record<string, number>;
  sortedTags: Tag[];
  matchedTags: Tag[];
  userTags: Record<Tag, number>;
  archetypeDetails: ArchetypeConfig;
}
export type QuestionProps = {
  quizKey: string;
  quizData: QuizData;
};
export interface QuizStore {
  quizData: QuizData;
  currentQuestion: QuizQuestion;
  currentSection: QuizSection;
  userTags: Record<Tag, number>;
  questionHistory: Array<{
    questionId: string;
    answer: string;
    tags: Tag[];
  }>;
  progress: number;
  results: QuizResults | null;
  answerQuestion: (option: QuizOption, questionId: string) => void;
  calculateResults: () => QuizResults;
  setPhase: (phase: "intro" | "question") => void;
  phase: "intro" | "question";
}