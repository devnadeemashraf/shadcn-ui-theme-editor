import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RootProvider from "./components/root-provider";

import { Toaster } from "./components/ui/toaster";

import Home from "@/pages/Home";
import Blocks from "@/pages/Blocks";
import useGetAppTheme from "./hooks/useGetAppTheme";

function App() {
  const loading = useGetAppTheme();

  return loading == true ? (
    <h1>Loading</h1>
  ) : (
    <RootProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blocks" element={<Blocks />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </RootProvider>
  );
}

export default App;
