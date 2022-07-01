import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./Pages/Survey";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
