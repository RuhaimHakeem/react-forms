import * as React from "react";
import styled from "styled-components";
import "./cart.css";
import { CartBody } from "./cart-body.component";
import { CartOrder } from "./cart-order.component";

import { SHeader } from "./cart-heading.component";

const SCart = styled.div`
  display: flex;
  margin: 80px auto;
`;

const SContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  left: 20px;
`;

const STable = styled.table`
  width: 70%;
`;

const STheader = styled.th`
  text-align: left;
  padding: 5px;
  font-weight: normal;
  color: #928686ec;
  text-align: center;
  width: 25%;
`;

export const Cart: React.FC = () => {
  const data = [
    { descirption: "nice shoes", price: 700, total: 500 },
    { descirption: "nice shoes", price: 700, total: 500 },
    { descirption: "nice shoes", price: 700, total: 500 },
    { descirption: "nice shoes", price: 700, total: 500 },
  ];

  return (
    <SCart>
      <SContainer>
        <SHeader>Shopping Cart</SHeader>

        <STable>
          <tr>
            <STheader>Product Details</STheader>
            <STheader></STheader>

            <STheader>Quantity</STheader>
            <STheader>Price</STheader>
            <STheader>Total</STheader>
          </tr>
          {data.map((val) => (
            <CartBody
              desc={val.descirption}
              price={val.price}
              total={val.total}
            />
          ))}
        </STable>
      </SContainer>

      <CartOrder />
    </SCart>
  );
};
