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

const InfoCont = styled.main`
  width: 90%;
  margin: 30px auto;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
`