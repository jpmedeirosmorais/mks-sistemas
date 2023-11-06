export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
