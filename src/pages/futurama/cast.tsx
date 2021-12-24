import type { NextPage } from "next";
import { CastCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Cast } from "../../types/Cast";



const CastPage: NextPage = () => {
  const endpoint = "cast";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />


  return (
    <div>
      <h1>CastPage</h1>
      <main>
        {data.map((castData: Cast) => {
          return (
            <CastCard
              key={`cast-futurama-${castData.id}`}
              castData={castData}
            />
          );
        })}
      </main>
 
    </div>
  )
}

export default CastPage;