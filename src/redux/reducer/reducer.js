import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  data: [],
};

// Define a slice
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    // Reducer function to handle adding data
    addData(state, action) {
      state.data = [...state.data, action.payload];
    },
    // Reducer function to handle editing data
    editData(state, action) {
      const idToEdit = action.payload;
      state.data = state.data.map((item) => {
        if (item.id === idToEdit) {
          return { ...item, edit: true };
        } else {
          return item;
        }
      });
    },
    // Reducer function to handle deleting data
    deleteData(state, action) {
      const idToDelete = action.payload;
      state.data = state.data.filter((item) => item.id !== idToDelete);
    },
    saveData(state, action) {
      const saveToId = action.payload.id;
      const newData = action.payload.newData;
      state.data = state.data.map((item) => {
        if (saveToId === item.id) {
          return { id: saveToId, ...newData };
        } else {
          return item;
        }
      });
    },
  },
});

// Export the action creators
export const { addData, editData, deleteData, saveData } = addSlice.actions;

// Export the reducer
export default addSlice.reducer;
