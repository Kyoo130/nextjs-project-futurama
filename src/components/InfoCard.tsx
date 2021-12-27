import styled from "@emotion/styled";
import { Info } from "../types/info";

interface InfoProps {
  infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { synopsis, yearsAired, creators } = infoData;

  return (
    <div>
      <h2>Synopsis</h2>
      <small>{yearsAired}</small>
      <p>{synopsis}</p>
    </div>
  );
};


