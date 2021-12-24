import type { NextPage } from "next";
import { InfoCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Info } from "../../types/info";

const InfoPage: NextPage = () => {
  const endpoint = "info";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>InfoPage</h1>
      <main>
        {data.map((infoData: Info) => {
          return (
            <InfoCard
              key={`cast-futurama-${infoData.id}`}
              infoData={infoData}
            />
          );
        })}
      </main>
    </div>
  )
}

export default InfoPage;