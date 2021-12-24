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
      <h1>EpisodesPage</h1>
      <main>
        {data.map((episodesData: Episodes) => {
          return (
            <EpisodeCard
              key={`cast-futurama-${episodesData.id}`}
              episodesData={episodesData}
            />
          );
        })}
      </main>
    </div>
  )
}

export default EpisodesPage;