import * as React from "react";
import styled from "styled-components";
import "./cart.css";
import { CartBody } from "./cart-body.component";
import { CartOrder } from "./cart-order.component";
import { Button } from "../button";

export const Cart: React.FC = () => {
  const data = [
    { descirption: "nice shoes", price: 700, total: 500 },
    { descirption: "nice shoes", price: 700, total: 500 },
    { descirption: "nice shoes", price: 700, total: 500 },
  ];

  const ruhaim = {
    name: "Ruhaim",
    age: 21,
  };
  const persons = [
    { name: "ruhaim", age: 20 },
    { name: "ruhaim", age: 20 },
    { name: "ruhaim", age: 20 },
  ];
  return (
    <div className="cart__home">
      <div className="container">
        <div className="cart__page">
          <table>
            <tr>
              <th>Product Details</th>
              <th></th>

              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            {data.map((val) => (
              <CartBody
                desc={val.descirption}
                price={val.price}
                total={val.total}
              />
            ))}
          </table>
        </div>
      </div>

      <CartOrder />
    </div>
  );
};
