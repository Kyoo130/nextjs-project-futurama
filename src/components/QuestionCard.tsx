import { Questions } from "../types/Questions";

interface QuestionProps {
  questionData: Questions;
}

export const QuestionCard = ({ questionData }: QuestionProps) => {
  const { question, possibleAnswers, correctAnswer } = questionData;

  return (
    <div>
      <h2>QuestionCard</h2>
      <li>{question}</li>
      <li>{possibleAnswers}</li>
      <li>{correctAnswer}</li>
    </div>
  );
};
