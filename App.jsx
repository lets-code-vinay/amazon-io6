import React from "react";
import HeaderBasic from "./src/components/HeaderBasic/HeaderBasic";
import Login_page from "./src/pages/LoginPage/login_page";
import SignupPage from "./src/pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router-dom";
import FooterBasic from "./src/Components/FooterBasic/FooterBasic";
import Homepage from "./src/pages/Homepage";
import ProductPage from "./src/pages/ProductPage";
const App = () => {
  return (
    <>
    
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
        <Route  path="/login" element={<Login_page />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/ProductPage" element={<ProductPage/>} />
      </Routes>
      {/* <Login_page /> */}
      {/* <SignupPage /> */}
      <FooterBasic />
    </>
  );
};

export default App;