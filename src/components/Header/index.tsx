"use client";

import { ShoppingCart } from "../ShoppingCart";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <div className="brand-title">
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </div>
      <ShoppingCart />
    </Container>
  );
};
