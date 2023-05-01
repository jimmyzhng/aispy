import '@testing-library/jest-dom';
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("renders without crashing", () => {
  render(
    <App />
  );

  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
