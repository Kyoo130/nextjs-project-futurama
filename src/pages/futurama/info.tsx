import styled from "@emotion/styled";
import type { NextPage } from "next";
import { InfoCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Information } from "../../types/Info";



const InfoPage: NextPage = () => {
  const endpoint = "info";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <InfoH2>Information</InfoH2>
      <InfoCont>
        {data.map((infoData: Information) => {
          return (
            <InfoCard
              key={`cast-futurama-${infoData.id}`}
              infoData={infoData}
            />
          );
        })}
      </InfoCont>
    </div>
  )
}

export default InfoPage;


const InfoH2 = styled.h2`
  text-align: center;
`

const InfoCont = styled.main`
  width: 50%;
  margin: 10px auto;
  border-radius: 4px;
  font-variant: small-caps;
`