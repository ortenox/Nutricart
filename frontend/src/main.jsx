import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

import { MealProvider } from "./context/MealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MealProvider>
      <App />
    </MealProvider>
  </React.StrictMode>
);