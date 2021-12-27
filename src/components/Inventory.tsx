import styled from "@emotion/styled";
import { Inventory } from "../types/Inventory";

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price, stock } = inventoryData;

  return (
    <InventoryCont>
      <InventoryH3>{title}</InventoryH3>
    </InventoryCont>
  );
};

const InventoryCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 340px;
  height: 260px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  background-color: lightgray;
  color: #bdbdbd;
  &:hover {
    background-color: #fff;
    color: blue;
  }
`;

const InventoryH3 = styled.h3`
  position: relative;
  text-align: center;
  font-size: 1.5em;
`;
