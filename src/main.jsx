import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import { FavoritesProvider } from "./context/FavoritesContext";
import "react-toastify/dist/ReactToastify.css"; // Importante
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
  <ThemeProvider>
    <App />
    <ToastContainer position="top-center" autoClose={3000} />
  </ThemeProvider>
</FavoritesProvider>
);