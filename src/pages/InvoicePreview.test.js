import { render, screen } from "@testing-library/react";
import InvoicePreview from "./InvoicePreview"

test("renders the Invoice Preview correctly", () => {
    render(<InvoicePreview />)

    expect(screen.getByText("Invoice")).toBeInTheDocument();
});