import React from "react";

import SignupPage from "./src/pages/SignupPage/SignupPage";
import LoginPage from "./src/pages/LoginPage/LoginPage";

import Homepage from "./src/pages/Homepage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/productpage" element={<ProductPage />} /> */}
      </Routes>
      {/* <Login_page /> */}
      {/* <SignupPage /> */}
    </>
  );
};

export default App;
