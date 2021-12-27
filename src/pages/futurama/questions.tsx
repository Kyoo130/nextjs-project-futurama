import styled from "@emotion/styled";
import type { NextPage } from "next";
import { QuestionCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Questions } from "../../types/Questions";

const QuestionsPage: NextPage = () => {
  const endpoint = "questions";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <QuestionsMain>
        {data.map((questionData: Questions) => {
          return (
            <QuestionCard
              key={`cast-futurama-${questionData.id}`}
              questionData={questionData}
            />
          );
        })}
      </QuestionsMain>
    </div>
  )
}

export default QuestionsPage;

const QuestionsMain = styled.main`
  margin: 20px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
`