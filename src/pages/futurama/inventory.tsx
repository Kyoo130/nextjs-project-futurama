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
      <h1>InventoryPage</h1>
      <main>
        {data.map((inventoryData: Inventory) => {
          return (
            <InventoryCard
              key={`inventory-futurama-${inventoryData.id}`}
              inventoryData={inventoryData}
            />
          );
        })}
      </main>
    </div>
  )
}

export default InventoryPage;