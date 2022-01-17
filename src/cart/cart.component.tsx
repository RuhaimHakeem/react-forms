import * as React from "react";
import styled from "styled-components";
import "./cart.css";

import { Button } from "../button";

const SCartcontainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  left: 10%;
`;

const SCart = styled.div`
  display: flex;
`;

const SProduct = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`;

const SProducts = styled.div`
  flex: 0.75;
`;

const SProductinfo = styled.div`
  padding: 20px;
  width: auto;
  position: relative;
`;
const SSubtext = styled.p`
  margin-bottom: 10px;
`;

// const SCarttotal = styled.div``;

export const Cart: React.FC = () => {
  return (
    <SCartcontainer>
      <div className="subHeads">
        <div className="product__details">
          <p>Product Details</p>
        </div>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <SCart>
        <SProducts>
          <SProduct>
            <SImg
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <SProductinfo>
              <SSubtext>New Shoes</SSubtext>
              <SSubtext>Good Pair of shoes</SSubtext>
            </SProductinfo>
            <div className="qtyBox">
              <div className="quantity">
                <button type="button">-</button>
                <input type="text" id="quantity" value="1" />
                <button type="button">+</button>
              </div>
            </div>
          </SProduct>

          <SProduct>
            <SImg
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <SProductinfo>
              <SSubtext>New Shoes</SSubtext>
              <SSubtext>Good Pair of shoes</SSubtext>
            </SProductinfo>
            <div className="qtyBox">
              <div className="quantity">
                <button type="button">-</button>
                <input type="text" id="quantity" value="1" />
                <button type="button">+</button>
              </div>
            </div>
          </SProduct>

          <SProduct>
            <SImg
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <SProductinfo>
              <SSubtext>New Shoes</SSubtext>
              <SSubtext>Good Pair of shoes</SSubtext>
            </SProductinfo>
            <div className="qtyBox">
              <div className="quantity">
                <button type="button">-</button>
                <input type="text" id="quantity" value="1" />
                <button type="button">+</button>
              </div>
            </div>
          </SProduct>
        </SProducts>

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
      </SCart>
    </SCartcontainer>
  );
};
