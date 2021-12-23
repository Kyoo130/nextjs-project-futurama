import type { NextPage } from "next";
import { CharacterCard, Error, Loading } from "../../components";
import { useCharactersSData } from "../../hooks/useCharactersData";
import { Character } from "../../types/Character";

const CharactersPage: NextPage = () => {
  const title = "characters";
  const { data, error } = useCharactersSData(title);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>CharactersPage</h1>
      <main>
        {data.map((characterData: Character) => {
          return (
            <CharacterCard
              key={`characters-futurama-${characterData.id}`}
              characterData={characterData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default CharactersPage;
