import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  editData,
  addData,
  saveData,
} from "../../redux/reducer/reducer";

const UserData = () => {
  const data = useSelector((state) => state.user.data);
  console.log("data is", data);
  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const handleEdit = (id) => {
    dispatch(editData(id));
    // Set initial editedName and editedPhone when editing starts
    const userToEdit = data.find((user) => user.id === id);
    setEditedName(userToEdit.name);
    setEditedPhone(userToEdit.phone);
  };

  const handleSave = (id) => {
    dispatch(
      saveData({
        id,
        newData: { name: editedName, phone: editedPhone, edit: false },
      })
    );
  };

  const handleCancel = () => {
    // You can add logic here if needed, for example, to reset the edited data
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div>
      <h2>User Data:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.edit ? (
              <>
                <input
                  type="text"
                  value={editedName} // Bind value to editedName
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  value={editedPhone} // Bind value to editedPhone
                  onChange={(e) => setEditedPhone(e.target.value)}
                />
                <button onClick={() => handleSave(user.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <span>Name: {user.name + " "} </span>
                <span>Phone: {user.phone}</span>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
