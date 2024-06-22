import "./globals.css";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { Analytics } from "@vercel/analytics/react";

import { store } from "@/store";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* Use Analytics in Production */}
    {import.meta.env.VITE_ENV == "prod" && <Analytics />}

    <Provider store={store}>
      <App />
    </Provider>
  </>
);
