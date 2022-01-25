import styled from "styled-components";
import "./cart.css";
import { SHeader } from "./cart-heading.component";
import { Button } from "../button";
import { SPara } from "./cart-paragraph.component";

const SCartOrder = styled.div`
  position: relative;
  right: 100px;
`;

const STotalItems = styled.div`
  margin: 50px auto;
`;

const SLine = styled.div`
  border-bottom: 1px solid rgb(190, 190, 190);
  margin-bottom: 50px;
`;

export const CartOrder: React.FC = () => {
  return (
    <SCartOrder>
      <SHeader>Order Summary</SHeader>

      <SLine />

      <STotalItems>
        <SPara fontWeight="bold">Items 4</SPara>
      </STotalItems>
      <SPara>
        <span>Sub Total:</span>
        <span>$500</span>
      </SPara>

      <SPara>
        <span>Total Savings:</span>
        <span>$500</span>
      </SPara>
      <SLine />

      <SPara fontWeight="bold">
        <span>Net Total:</span>
        <span>$500</span>
      </SPara>

      <Button mt="24px"> Proceed To checkout </Button>
    </SCartOrder>
  );
};
