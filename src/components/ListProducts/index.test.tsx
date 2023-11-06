// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ListProducts } from ".";
// import { Product } from "@/interfaces/product";

// jest.mock("react-query");

// describe("ListProducts", () => {
//   const mockData = {
//     data: [
//       {
//         brand: "Apple",
//         description: "iPhone 12 128GB",
//         id: 1,
//         photo: "",
//         price: 10000,
//         name: "iPhone 12 128GB",
//       },
//     ] as Product[],
//     isLoading: false,
//   };

//   it("renders loading skeleton when loading", async () => {
//     const mockUseQuery = jest.fn();
//     mockUseQuery.mockImplementation(() => mockData);

//     jest.mock("react-query", () => ({
//       useQuery: mockUseQuery,
//     }));

//     const { getByText } = render(
//       <QueryClientProvider client={new QueryClient()}>
//         <ListProducts />
//       </QueryClientProvider>
//     );

//     const loadingSkeleton = getByText("iPhone 12 128GB");
//     expect(loadingSkeleton).toBeTruthy();
//   });

//   it("renders products when loaded", async () => {
//     const mockUseQuery = jest.fn();
//     mockUseQuery.mockImplementation(() => ({
//       data: mockProducts,
//       isLoading: false,
//     }));

//     jest.mock("react-query", () => ({
//       useQuery: mockUseQuery,
//     }));

//     render(
//       <QueryClientProvider client={new QueryClient()}>
//         <ListProducts />
//       </QueryClientProvider>
//     );

//     // Assert that product cards are rendered
//     const productCards = screen.getAllByTestId("product-card");
//     expect(productCards.length).toBe(2); // Assuming there are 2 products in the mock
//   });
// });
