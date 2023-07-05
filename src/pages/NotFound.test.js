import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders the NotFound component correctly", () => {
  render(<NotFound />);
  expect(screen.getByText("404")).toBeInTheDocument();
  expect(screen.getByText("Page not found")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /go back home/i })).toBeInTheDocument();
});
