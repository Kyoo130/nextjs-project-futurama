import styled from "@emotion/styled";
import type { NextPage } from "next";
import { CharacterCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Character } from "../../types/Character";

const CharactersPage: NextPage = () => {
  const endpoint = "characters";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <CharacterH2>Characters</CharacterH2>
      <CharacterMain>
        {data.map((characterData: Character) => {
          return (
            <CharacterCard
              key={`characters-futurama-${characterData.id}`}
              characterData={characterData}
            />
          );
        })}
      </CharacterMain>
    </div>
  );
};

export default CharactersPage;

const CharacterH2 = styled.h2`
  text-align: center;
`

const CharacterMain = styled.main`
  margin: auto 10%;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`