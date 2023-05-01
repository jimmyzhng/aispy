import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "../components/Home";

test("renders the Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome to AiSpy")).toBeInTheDocument();

  expect(
    screen.getByText("Meet the new standard for modern surveillance systems.")
  ).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Start Now" });
  userEvent.click(button);

})

