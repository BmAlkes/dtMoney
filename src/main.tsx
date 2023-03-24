import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { TransactionProvider } from "./contexts/TransactionContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
