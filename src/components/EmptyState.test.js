import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

test("renders the EmptyState component correctly", () => {
  const title = "No Data Available";
  const description = "There is no data to display.";
  const actionText = "Reload Data";
  const action = jest.fn();

  render(
    <EmptyState title={title} description={description} actionText={actionText} action={action} />,
  );

  // Verify that the necessary elements and texts are rendered
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(description)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: actionText })).toBeInTheDocument();
});
