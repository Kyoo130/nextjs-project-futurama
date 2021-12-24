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
