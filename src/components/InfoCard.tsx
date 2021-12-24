import { Info } from "../types/info";

interface InfoProps {
  infoData: Info;
}

export const InfoCard = ({ infoData }: InfoProps) => {
  const { synopsis, yearsAired, creators } = infoData;

  return (
    <div>
      <dl>
        <dt>synopsis</dt>
        <dd>{synopsis}</dd>
      </dl>
      <dl>
          <dt>yearsAired</dt>
          <dd>{yearsAired}</dd>
      </dl>
      <dl>
          <dt>creators - 1</dt>
          <dd>{creators[0].name}</dd>
          <dd>{creators[0].url}</dd>
      </dl>
      <dl>
          <dt>creators - 2</dt>
          <dd>{creators[1].name}</dd>
          <dd>{creators[1].url}</dd>
      </dl>
    </div>
  );
};
