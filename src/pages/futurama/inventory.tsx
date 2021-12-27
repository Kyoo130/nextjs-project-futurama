import styled from "@emotion/styled";
import type { NextPage } from "next";
import { InventoryCard, Error, Loading } from "../../components";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types/Inventory";

const InventoryPage: NextPage = () => {
  const endpoint = "inventory";
  const { data, error } = useFuturamaData(endpoint);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <InventoryH2>Inventory</InventoryH2>
      <InventoryMain>
        {data.map((inventoryData: Inventory) => {
          return (
            <InventoryCard
              key={`inventory-futurama-${inventoryData.id}`}
              inventoryData={inventoryData}
            />
          );
        })}
      </InventoryMain>
    </div>
  )
}

export default InventoryPage;


const InventoryH2 = styled.h2`
  text-align: center;
`

const InventoryMain = styled.main`
  margin: auto 10%;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`