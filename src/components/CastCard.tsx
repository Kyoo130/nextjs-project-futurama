import { Cast } from "../types/Cast";

interface CastProps {
  castData: Cast;
}

export const CastCard = ({ castData }: CastProps ) => {
  const {name, born, died, bio} = castData;

  return (
      <div>
        <h2>{name}</h2>
        <li>{born}</li>
        <li>{bio.url}</li>
      </div>
  )
};