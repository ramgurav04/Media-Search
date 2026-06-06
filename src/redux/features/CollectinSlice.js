import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getInitialCollection = () => {
  const localData = localStorage.getItem("collection");
  if (!localData || localData === "undefined") {
    return [];
  }
  try {
    return JSON.parse(localData);
  } catch (error) {
    console.log("Error parsing collection from localStorage", error);
    return [];
  }
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    items: getInitialCollection(),
  },
  reducers: {
    addToCollection: (state, action) => {
      // Guard clause: Ensure payload and payload.id exist
      if (!action.payload || !action.payload.id) return;

      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter(
        (iteam) => iteam.id !== action.payload.id,
      );
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    addToast: () => {
      toast.success("Added to collection!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    removeTost: () => {
      toast.error("Removed from collection!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });
    },
  },
});

export const {
  addToCollection,
  removeCollection,
  addToast,
  clearCollection,
  removeTost,
} = collectionSlice.actions;

export default collectionSlice.reducer;
