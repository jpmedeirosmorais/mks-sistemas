"use client";

import { useQuery } from "react-query";
import { getProducts } from "./services";
import { GetProductsProps } from "./interfaces";
import { useState } from "react";
import { Product } from "@/interfaces/product";
import { ProductCard } from "../ProductCard";
import { Container, ListContainer } from "./styles";
import { ProductCardSkeleton } from "../ProductCard/ProductCardSkeleton";

export const ListProducts = () => {
  const [params, setParams] = useState<GetProductsProps>({
    page: 1,
    rows: 8,
    sortBy: "name",
    orderBy: "DESC",
  });

  const { data: products, isLoading } = useQuery<Product[]>(
    `products-page${params.page}`,
    () => getProducts(params),
    {
      onError: (error) => console.error(error),
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  return (
    <Container>
      <ListContainer>
        {isLoading
          ? Array.from({ length: params.rows }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products?.map((product) => (
              <ProductCard {...{ product }} key={product.id} />
            ))}
      </ListContainer>
    </Container>
  );
};
