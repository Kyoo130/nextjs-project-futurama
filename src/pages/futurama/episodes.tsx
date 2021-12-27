import styled from "@emotion/styled";
import type { NextPage } from "next";
import { EpisodeCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/Episodes";


const EpisodesPage: NextPage = () => {
  const endpoint = "episodes";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <EpisodeMain>
        {data.map((episodesData: Episodes) => {
          return (
            <EpisodeCard
              key={`cast-futurama-${episodesData.id}`}
              episodesData={episodesData}
            />
          );
        })}
      </EpisodeMain>
    </div>
  )
}

export default EpisodesPage;

const EpisodeMain = styled.main`
  margin: 20px 10% 20px;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, 1fr);
`