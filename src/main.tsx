import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { store } from "@/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Analytics />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
