import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GlobalReset } from "./styles/reset.js";
import {
  ContextProvider,
  UserContext,
} from "./components/User/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalReset />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
