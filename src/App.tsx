import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import Navbar from "@/components/shared/navbar";
import RootProvider from "@/components/rootProvider";

import Loading from "@/pages/Loading";
import Home from "@/pages/Home";
import Blocks from "@/pages/Blocks";

import useAppTheme from "@/hooks/useAppTheme";

function App() {
  const { loading } = useAppTheme();

  if (loading) {
    return <Loading />;
  }

  return (
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
