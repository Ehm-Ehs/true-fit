import { Question } from "~/components/quiz/questions";
import { quizData } from "~/components/utils/quiz";

export default function Tech() {
  return (
    <div className="text-primary">
      <Question quizKey="tech" quizData={quizData} />
    </div>
  );
}
