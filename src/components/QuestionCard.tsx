import styled from "@emotion/styled";
import { Questions } from "../types/Questions";

interface QuestionProps {
  questionData: Questions;
}

export const QuestionCard = ({ questionData }: QuestionProps) => {
  const { question, possibleAnswers, correctAnswer } = questionData;

  return (
    <QuestionDiv>
      <h3>{question}</h3>
      {possibleAnswers.map((possibleAnswer: Questions) => {
          return (
            <li key={possibleAnswer}>{possibleAnswer}</li>
          );
        })}
    </QuestionDiv>
  );
};

const QuestionDiv = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`