"use client";

import Image from "next/image";
import { ProductCardProps } from "./interfaces";
import {
  Body,
  Container,
  Description,
  FooterButton,
  ImageContainer,
  Price,
  Title,
  TitlePriceContainer,
} from "./styles";
import { useState } from "react";
import { Tooltip } from "../Tooltip";
import { useShoppingCartContext } from "@/contexts/ShoppingCartContext";

export const ProductCard = ({ product }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { handleAddToCart } = useShoppingCartContext();

  const defaultImage = "/images/defaultImage.png";

  return (
    <Container>
      <ImageContainer>
        <Image
          src={imageLoaded ? product.photo : defaultImage}
          objectFit="contain"
          fill
          alt={product.name}
          onError={() => setImageLoaded(false)}
          onLoad={() => setImageLoaded(true)}
        />
      </ImageContainer>
      <Body>
        <TitlePriceContainer>
          <Title>{product.name}</Title>
          <Price>R${product.price}</Price>
        </TitlePriceContainer>

        <Tooltip text={product.description}>
          <Description>{product.description}</Description>
        </Tooltip>
      </Body>
      <FooterButton onClick={() => handleAddToCart(product)}>
        <Image
          src="/svgs/bag.svg"
          alt="Icone de carrinho de compras"
          width={19}
          height={18}
        />
        COMPRAR
      </FooterButton>
    </Container>
  );
};
