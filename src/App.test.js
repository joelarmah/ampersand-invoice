import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  MemoryRouter,
} from "react-router-dom";

test("renders InvoicePreview component when route matches", () => {
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Invoice Preview")).toBeInTheDocument();
});
