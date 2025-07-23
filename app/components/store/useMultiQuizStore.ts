// components/hooks/useMultiQuizStore.ts
import { useStore } from 'zustand';
import { createQuizStore } from './useQuizStore';
import { QuizData } from '../utils/types';

const storeMap = new Map<string, ReturnType<typeof createQuizStore>>();


export const useMultiQuizStore = (quizKey: string, quizData: QuizData) => {
  // If no store exists for this key, create and store it
  if (!storeMap.has(quizKey)) {
    const newStore = createQuizStore(quizData);
    storeMap.set(quizKey, newStore);
  }

  // Always return the same store instance for the given key
  const store = storeMap.get(quizKey)!;
  return useStore(store);
};
