import { screen, render } from "@testing-library/react";
import React from "react";
import App from "../src/components/App";

describe("App", function () {
  it('renders the text "App Test!"', () => {
    render(<App />);
    expect(screen.getByTestId("app-text")).toBeInTheDocument();
    expect(screen.getByText("App Test!")).toBeVisible();
  });
});
