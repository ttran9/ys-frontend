import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

/**
 * The entry point of the react application supporting redux and routing.
 */
root.render(<App />);
