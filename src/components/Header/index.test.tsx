import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("renders Header component", () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText("MKS");
    expect(headerElement).toBeTruthy();
  });
});
