"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListProducts } from "@/components/ListProducts";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <QueryClientProvider client={queryClient}>
        <ShoppingCartProvider>
          <Header />
          <ListProducts />
          <Footer />
        </ShoppingCartProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}
