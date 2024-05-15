import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SeletedUser from "./pages/SelectedUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected" element={<SeletedUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
