import styled from "@emotion/styled";
import { Character } from "../types/Character";

interface CharacterProps {
  characterData: Character;
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
  const { name, images, gender, species, homePlanet, occupation, age } =
    characterData;

  return (
    <div>
      <CharacterCont>
        <CharacterImg src={images.main} alt="images" />
        <p>
          <strong>
            {name.first} {name.middle} {name.last}
          </strong>
        </p>
        <p>{occupation}</p>
      </CharacterCont>
    </div>
  );
};

const CharacterCont = styled.div`
  min-width: 340px;
  height: 260px;
  text-align: center;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 200ms ease-in;
  &:hover{
    transform: scale(1.03);
  }
  
`

const CharacterImg = styled.img`
  padding-top: 20px;
  height: 150px;
`;
