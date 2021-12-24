import { Inventory } from "../types/Inventory";

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price, stock } = inventoryData;

  return (
    <div>
      <h2>{title}</h2>
      <li>{category}</li>
      <li>{description}</li>
      <li>{slogan}</li>
      <li>{price}</li>
      <li>{stock}</li>
    </div>
  );
};
