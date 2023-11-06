"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  DrawerButton,
  DrawerContainer,
  DrawerContent,
  ListProducts,
  DrawerTitle,
  DrawerHeader,
  Close,
  DrawerFooter,
  Total,
  ButtonFooter,
  EmptyCart,
} from "./styles";
import Image from "next/image";
import { useShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { ProductCart } from "../ProductCart";

export const ShoppingCart = () => {
  const { cartList } = useShoppingCartContext();

  const [open, setOpen] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const drawerRef = useRef<HTMLDivElement>(null);

  const handleTotalPrice = useCallback(() => {
    const total = cartList.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartList]);

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !(drawerRef as any).current.contains(event.target)
      ) {
        setOpen(false);
      }
    },
    [drawerRef, setOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    handleTotalPrice();
  }, [handleTotalPrice]);

  return (
    <>
      <DrawerButton onClick={toggleDrawer}>
        <Image
          src="/svgs/cart.svg"
          alt="Icone de carrinho de compras"
          width={19}
          height={18}
        />

        <span>{cartList.length}</span>
      </DrawerButton>
      <DrawerContainer open={open} ref={drawerRef}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Carrinho de compras</DrawerTitle>
            <Close onClick={toggleDrawer}>X</Close>
          </DrawerHeader>
          <ListProducts>
            {cartList.length > 0 ? (
              cartList.map((product) => (
                <ProductCart {...{ product }} key={product.id} />
              ))
            ) : (
              <EmptyCart>
                <Image
                  src="/svgs/empty-state.svg"
                  fill
                  objectFit="contain"
                  alt="Carrinho vazio"
                />

                <h3>Carrinho vazio</h3>
              </EmptyCart>
            )}
          </ListProducts>

          <DrawerFooter>
            <Total>
              <p>Total:</p>
              <p>R${totalPrice}</p>
            </Total>

            <ButtonFooter>Finalizar compra</ButtonFooter>
          </DrawerFooter>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};
