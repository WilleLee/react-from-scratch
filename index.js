import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return React.createElement("h1", null, "Hello React");
}

const rootElement = document.getElementById("root");

createRoot(rootElement).render(React.createElement(App));
