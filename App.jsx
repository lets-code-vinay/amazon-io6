import React from "react";
import HeaderBasic from "./src/Components/HeaderBasic/HeaderBasic";
import Login_page from "./src/pages/LoginPage/login_page";
// import SignupPage from "./src/pages/SignupPage/SignupPage";

import FooterBasic from "./src/Components/FooterBasic/FooterBasic";
const App = () => {
  return (
    <>
      <HeaderBasic />
      <Login_page />
      {/* <SignupPage /> */}
      <FooterBasic />
    </>
  );
};

export default App;
