import { Product } from "@/interfaces/product";
import { GetProductsProps } from "./interfaces";

const getProducts = async (params: GetProductsProps): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products?page=${params.page}&rows=${params.rows}&sortBy=${params.sortBy}&orderBy=${params.orderBy}`
    );

    const responseInJson = await response.json();

    const products: Product[] = responseInJson.products;

    return products;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os produtos:", error);
    throw error;
  }
};

export { getProducts };
