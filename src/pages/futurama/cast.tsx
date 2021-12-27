import styled from "@emotion/styled";
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
      <CastH2>CastPage</CastH2>
      <CastMain>
        {data.map((castData: Cast) => {
          return (
            <CastCard
              key={`cast-futurama-${castData.id}`}
              castData={castData}
            />
          );
        })}
      </CastMain>

    </div>
  )
}

export default CastPage;

const CastH2 = styled.h2`
  text-align: center;
`

const CastMain = styled.main`
  margin: auto 10%;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`