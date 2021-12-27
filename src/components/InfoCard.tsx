import { Information } from "../types/Info"

interface InfoProps {
  infoData: Information;
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


