"use client";

import { Montserrat } from "next/font/google";
import GlobalStyles from "@/styles/globalStyles";
import { useState, useEffect } from "react";
import { LoadingPage } from "@/components/LoadingPage";
import { ToastProvider } from "@/contexts/ToastContext";

const mont = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="pt-br">
      <head>
        <title>MKS sistemas</title>
        <link rel="icon" href="/icos/brand.ico" />
      </head>
      <GlobalStyles />
      <body className={mont.className}>
        {mounted ? <ToastProvider>{children}</ToastProvider> : <LoadingPage />}
      </body>
    </html>
  );
}
