import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages and loaders
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
