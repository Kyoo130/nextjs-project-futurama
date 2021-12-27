import styled from "@emotion/styled";
import { Information } from "../types/Info"

interface InfoProps {
  infoData: Information;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { synopsis, yearsAired, creators } = infoData;

  return (
    <div>
      <InfoImg src="https://m.media-amazon.com/images/M/MV5BYTdmMWU4ZDEtY2Q0Mi00NWFiLWJlYmMtZjhmMzFlNWExMzg3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1280_.jpg" alt="Futurama" />
      <p>{synopsis}</p>
    </div>
  );
};

const InfoImg = styled.img`
  display: block;
  height: 400px;
  margin: 30px auto;
  border-radius: 5px;
`
