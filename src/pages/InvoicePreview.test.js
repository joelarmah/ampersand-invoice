import { render, screen, act } from "@testing-library/react";
import { BrowserRouter, useParams } from "react-router-dom";
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

jest.mock("../utils/utils", () => ({
  getSubTotal: jest.fn(),
  getTotal: jest.fn(),
  itemTotal: jest.fn(),
}));

describe("InvoicePreview component", () => {
  const mockInvoice = {
    id: "123456",
    invoiceNumber: 12,
    invoiceDate: "8 July 2023",
    company: {
      name: "Ampersand",
      address: "GM Plaza",
      city: "Accra",
      email: "team@ampersand.com",
      phone: "0559612394",
    },
    customer: {
      address: "Block 8A SSNIT Flats",
      city: "Adenta",
      email: "drew@gmail.com",
      name: "Drew Barnes",
      phone: "0241234556",
    },
    items: [
      {
        id: "098853",
        name: "Item 1",
        qty: "1",
        price: "200",
      },
    ],
  };

  beforeEach(() => {
    // Reset mock functions and values before each test
    useParams.mockReturnValue({ id: "123456" });
    fetchInvoiceById.mockResolvedValue(mockInvoice);
  });

  test("renders the Invoice Preview correctly", async () => {
    fetchInvoiceById.mockResolvedValue(mockInvoice);
    render(
      <BrowserRouter>
        <InvoicePreview />
      </BrowserRouter>,
    );
    await screen.findByText("Invoice");
    expect(screen.getByText("Invoice")).toBeInTheDocument();
  });

  test("renders empty state when invoice is not found", async () => {
    // Set the fetchInvoiceById function to return null
    fetchInvoiceById.mockResolvedValue(null);
    render(
      <BrowserRouter>
        <InvoicePreview />
      </BrowserRouter>,
    );
    // Verify that the empty state is rendered
    expect(screen.getByText("Invoice Not Found")).toBeInTheDocument();
  });

  test("renders invoice details when invoice is found", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <InvoicePreview />
        </BrowserRouter>,
      );
      // Wait for the fetchInvoiceById promise to resolve
      await Promise.resolve();
    });
    expect(screen.getByText("Invoice")).toBeInTheDocument();
  });
});
