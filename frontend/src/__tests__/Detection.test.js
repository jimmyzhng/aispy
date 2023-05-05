import React from "react";
import { render } from "@testing-library/react";
import Detection from "../components/Detection";

test("renders ReactPlayer component with correct props", () => {
  const videoUrl = "https://example.com/video.mp4";
  const muted = true;

  const { getByTestId } = render(<Detection video={videoUrl} muted={muted} />);
  const reactPlayer = getByTestId("react-player");
  expect(reactPlayer).toBeInTheDocument();
  expect(reactPlayer).toHaveAttribute("url", videoUrl);
  expect(reactPlayer).toHaveAttribute("muted", "true");
});