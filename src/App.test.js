import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  MemoryRouter,
} from "react-router-dom";

// Mock the Firebase dependencies
jest.mock('firebase/app', () => ({
  __esModule: true,
  initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  __esModule: true,
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(),
  signInAnonymously: jest.fn(),
  signInWithPopup: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  __esModule: true,
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  doc: jest.fn(),
  getDoc: jest.fn(),
}));

test("renders InvoicePreview component when route matches", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Customer Keeper")).toBeInTheDocument();
});
