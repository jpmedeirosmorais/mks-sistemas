import { ProductCartProps } from "./interfaces";
import {
  Container,
  ImageContainer,
  Minus,
  Plus,
  Price,
  Qtd,
  QtdAndPrice,
  Quantity,
  RemoveAll,
  Title,
} from "./styles";
import Image from "next/image";
import { useShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useState } from "react";

export const ProductCart = ({ product }: ProductCartProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { handleAddToCart, handleRemoveFromCart, handleRemoveAllFromCart } =
    useShoppingCartContext();

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

      <Title>{product.name}</Title>

      <QtdAndPrice>
        <Qtd>
          <Minus onClick={() => handleRemoveFromCart(product)}>-</Minus>
          <Quantity>{product.quantity}</Quantity>
          <Plus onClick={() => handleAddToCart(product)}>+</Plus>
        </Qtd>

        <Price>R${product.price}</Price>
      </QtdAndPrice>
      <RemoveAll onClick={() => handleRemoveAllFromCart(product)}>X</RemoveAll>
    </Container>
  );
};
