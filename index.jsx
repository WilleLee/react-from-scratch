import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>Hello React with JSX!</h1>;
}

const rootElement = document.getElementById("root");

createRoot(rootElement).render(<App />);
