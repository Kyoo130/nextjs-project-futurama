import { Character } from "../types/Character";

interface CharacterProps {
  characterData: Character
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
  const { name, images, gender, species, homePlanet, occupation, age  } = characterData;

  return (
    <div>
        <dl>
            <dt><strong>NAME</strong></dt>
            <dd>{name.first}</dd>
            <dd>{name.middle}</dd>
            <dd>{name.last}</dd>
        </dl>

        <div>
            <img src={images.main} alt="images" />
        </div>

        <p>{gender}</p>
        <p>{species}</p>
        <p>{homePlanet}</p>
        <p>{occupation}</p>
        <p>{age}</p>

    </div>
  )
}

