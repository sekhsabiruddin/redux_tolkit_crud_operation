import React, { useState } from "react";
import Input from "./components/InputBox/Input";
import UserData from "./components/UserData/UserData";
const App = () => {
  return (
    <div>
      <h2>Redux toolkit</h2>
      <Input />
      <UserData />
    </div>
  );
};

export default App;
