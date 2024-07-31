import React from "react";
import HeaderBasic from "./src/components/HeaderBasic/HeaderBasic";
import Login_page from "./src/pages/LoginPage/login_page";
import SignupPage from "./src/pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router-dom";
import FooterBasic from "./src/Components/FooterBasic/FooterBasic";
const App = () => {
  return (
    <>
      <HeaderBasic />
      <Routes>
        <Route exact path="/login" element={<Login_page />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {/* <Login_page /> */}
      {/* <SignupPage /> */}
      <FooterBasic />
    </>
  );
};

export default App;
