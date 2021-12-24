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
      <h1>QuestionsPage</h1>
      <main>
        {data.map((questionData: Questions) => {
          return (
            <QuestionCard
              key={`cast-futurama-${questionData.id}`}
              questionData={questionData}
            />
          );
        })}
      </main>
    </div>
  )
}

export default QuestionsPage;