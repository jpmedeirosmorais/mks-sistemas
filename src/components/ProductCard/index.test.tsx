import { Product } from "@/interfaces/product";
import { ProductCard } from ".";
import { render } from "@testing-library/react";

describe("ProductCard", () => {
  const mockProduct = {
    brand: "Apple",
    description: "iPhone 12 128GB description",
    id: 1,
    photo: "",
    price: 10000,
    name: "iPhone 12 128GB",
  } as Product;

  it("renders correctly", () => {
    const { getByText } = render(<ProductCard {...{ product: mockProduct }} />);
    const productCardElement = getByText("iPhone 12 128GB");

    expect(productCardElement).toBeTruthy();
  });

  it("renders correctly with description", () => {
    const { getByText } = render(<ProductCard {...{ product: mockProduct }} />);
    const productCardElement = getByText("iPhone 12 128GB description");

    expect(productCardElement).toBeTruthy();
  });

  it("renders correctly with price", () => {
    const { getByText } = render(<ProductCard {...{ product: mockProduct }} />);
    const productCardElement = getByText("R$10000");

    expect(productCardElement).toBeTruthy();
  });

  
});
