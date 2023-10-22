import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

import { Toaster } from "./components/ui/toaster";

import Home from "@/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
