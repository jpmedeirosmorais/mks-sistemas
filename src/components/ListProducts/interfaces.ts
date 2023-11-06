export interface GetProductsProps {
  page: number;
  rows: number;
  sortBy: "name" | "id" | "price";
  orderBy: "ASC" | "DESC";
}
