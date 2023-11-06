import React from "react";
import { getByRole, render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  test("renders Footer component", () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(
      "MKS sistemas © Todos os direitos reservados"
    );
    expect(footerElement).toBeTruthy();
  });
});
