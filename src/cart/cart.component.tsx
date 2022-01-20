import * as React from "react";
import styled from "styled-components";
import "./cart.css";
import { CartBody } from "./cart-body.component";
import { CartOrder } from "./cart-order.component";
import { Button } from "../button";

export const Cart: React.FC = () => {
  return (
    <div className="cart__home">
      <CartBody />
      {/* <CartOrder /> */}
    </div>
  );
};
