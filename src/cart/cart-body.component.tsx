import * as React from "react";
import styled from "styled-components";
import "./cart.css";
import { SPara } from "./cart-paragraph.component";

interface Props {
  desc: string;
  price: Number;
  total: Number;
}

interface props {
  marginLeft?: string;
  width?: string;
  cursor?: string;
  FontWeight?: string;
}

const STd = styled.td<props>`
  padding: 10px 5px;
  text-align: center;
  font-weight: ${(props) => props.FontWeight};
`;

const SImage = styled.img<props>`
  width: 100%;
  height: 100%;
  margin-right: 10px;
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
  cursor: ${(props) => props.cursor};
`;

const SQuantity = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 30px;
  padding: 5px;
  width: 50%;
  margin: 0 auto;

  & button {
    width: 45px;
    font-weight: 600;
    color: #000;
    border-radius: 0;
    background: #fff;
    border: none;
    cursor: pointer;
  }
  & input {
    border: none;
    text-align: center;
    width: 30px;
    font-size: 20px;
    color: #000;
    font-weight: 600;
  }
`;

export const CartBody: React.FC<Props> = (props) => {
  return (
    <tr>
      <STd>
        <SImage src={require("./images/shoe.jpg")}></SImage>
      </STd>
      <STd>
        <SPara> {props.desc} </SPara>
      </STd>
      <STd>
        <SQuantity>
          <button type="button">-</button>
          <input type="text" id="quantity" value="1" />
          <button type="button">+</button>
        </SQuantity>
      </STd>

      <STd FontWeight="bold">RS.{props.price}</STd>
      <STd FontWeight="bold">RS.{props.total}</STd>

      <STd>
        <SImage
          marginLeft="20px"
          width="50%"
          cursor="pointer"
          src="https://img.icons8.com/dotty/80/000000/filled-trash.png"
          alt=""
        />
      </STd>
    </tr>
  );
};
