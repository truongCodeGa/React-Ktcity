// import RegisterFormik from "./components/form/RegisterFormik";
import RegisterHook from "./components/form/RegisterHook";

import { Fragment, useState } from "react";

//Bài 168: So sánh formik và react-hook-form
function App() {
  return (
    <>
      <RegisterHook></RegisterHook>
      {/* <RegisterFormik></RegisterFormik> */}
    </>
  );
}

export default App;
