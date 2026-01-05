import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { Toaster } from "sonner";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        style: {
          background: "#1e293b",
          color: "#cbd5e1",
        },
        className: "my-toast",
      }}
    />
  </React.StrictMode>
);
