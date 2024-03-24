import React, { useState } from "react";
import { addData } from "../../redux/reducer/reducer";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (!name || !phone) {
      alert("Please Enter valid details");
      return;
    }

    const obj = {
      id: Date.now(),
      name,
      phone,
      edit: false,
    };

    dispatch(addData(obj));

    // Clear the input fields after form submission
    setName("");
    setPhone("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Input;
