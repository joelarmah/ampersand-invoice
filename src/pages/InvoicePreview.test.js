import { render, screen, act } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { fetchInvoiceById } from "../firebase";
import InvoicePreview from "./InvoicePreview";

// Mock the useParams hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

// Mock the fetchInvoiceById function
jest.mock("../firebase", () => ({
  fetchInvoiceById: jest.fn(),
}));

describe("InvoicePreview component", () => {
  const mockInvoice = {
    id: "123456",
    date: Date(),
  };

  beforeEach(() => {
    // Reset mock functions and values before each test
    useParams.mockReturnValue({ id: "123456" });
    fetchInvoiceById.mockResolvedValue(mockInvoice);
  });

  test("renders the Invoice Preview correctly", async () => {
    fetchInvoiceById.mockResolvedValue(mockInvoice);
    render(<InvoicePreview />);
    await screen.findByText("Invoice");
    expect(screen.getByText("Invoice")).toBeInTheDocument();
  });

  test("renders empty state when invoice is not found", async () => {
    // Set the fetchInvoiceById function to return null
    fetchInvoiceById.mockResolvedValue(null);
    render(<InvoicePreview />);
    // Verify that the empty state is rendered
    expect(screen.getByText("Invoice Not Found")).toBeInTheDocument();
  });

  test("renders invoice details when invoice is found", async () => {
    await act(async () => {
      render(<InvoicePreview />);
      // Wait for the fetchInvoiceById promise to resolve
      await Promise.resolve();
    });
    expect(screen.getByText("Invoice")).toBeInTheDocument();
  });

});
