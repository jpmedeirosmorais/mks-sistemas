import { Product } from "@/interfaces/product";
import { ProductCard } from ".";
import { render, cleanup } from "@testing-library/react";

describe("ProductCard", () => {
  const mockProduct = {
    brand: "Apple",
    description: "iPhone 12 128GB description",
    id: 1,
    photo: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/products/airpods.webp`,
    price: 10000,
    name: "iPhone 12 128GB",
  } as Product;

  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    const { getByText } = render(<ProductCard {...{ product: mockProduct }} />);
    const productCardElement = getByText("iPhone 12 128GB");

    expect(productCardElement).toBeTruthy();
  });

  it("image should have an load error", () => {
    render(
      <ProductCard
        {...{
          product: {
            ...mockProduct,
            photo: "/error-image-generic.png",
          },
        }}
      />
    );

    const imageElement = document.querySelector("img");

    expect(imageElement?.srcset.includes("defaultImage")).toBe(true);
    expect(imageElement?.srcset.includes("error-image-generic.png")).toBe(
      false
    );
  });
});
