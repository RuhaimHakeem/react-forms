import styled from "styled-components";
import { SCart } from "./cart-body.component";

import { Button } from "../button";

const SCartOrder = styled.div`
  position: relative;
  right: 50px;
  top: 200px;
`;

export const CartOrder: React.FC = () => {
  return (
    <SCartOrder>
      <div className="cart__total">
        <p>
          <span>Sub Total:</span>
          <span>$500</span>
        </p>

        <p>
          <span>Total Savings:</span>
          <span>$500</span>
        </p>

        <p>
          <span>Net Total:</span>
          <span>$500</span>
        </p>

        <Button> Proceed To checkout </Button>
      </div>
    </SCartOrder>
  );
};
