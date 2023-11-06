"use client";

import { CartProduct, Product } from "@/interfaces/product";
import React, { createContext, useCallback, useContext, useState } from "react";
import { useToastContext } from "./ToastContext";

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  cartList: Array<CartProduct>;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
  handleRemoveAllFromCart: (product: Product) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cartList: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleRemoveAllFromCart: () => {},
});

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartList, setCartList] = useState<Array<CartProduct>>([]);
  const { addToast } = useToastContext();

  const handleAddToCart = useCallback(
    (product: Product) => {
      const productAlreadyInCart = cartList.find(
        (item) => item.id === product.id
      );

      if (productAlreadyInCart) {
        setCartList((prev) =>
          prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCartList((prev) => [...prev, { ...product, quantity: 1 }]);
      }

      addToast(`${product.name} adicionado ao carrinho`, 2000);
    },
    [setCartList, cartList, addToast]
  );

  const handleRemoveFromCart = useCallback(
    (product: Product) => {
      const productAlreadyInCart = cartList.find(
        (item) => item.id === product.id
      );

      if (productAlreadyInCart) {
        if (productAlreadyInCart.quantity > 1) {
          setCartList((prev) =>
            prev.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          );
        } else {
          setCartList((prev) => prev.filter((item) => item.id !== product.id));
        }

        addToast(`${product.name} removido do carrinho`, 2000);
      }
    },
    [setCartList, cartList, addToast]
  );

  const handleRemoveAllFromCart = useCallback(
    (product: Product) => {
      setCartList((prev) => prev.filter((item) => item.id !== product.id));

      addToast(`${product.name} removido do carrinho`, 2000);
    },
    [addToast]
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        cartList,
        handleAddToCart,
        handleRemoveFromCart,
        handleRemoveAllFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);
