import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TProvider } from "./theme/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TProvider>
);
