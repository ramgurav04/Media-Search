import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search ",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
       console.log("Reducer received:", action.payload); // Debug log
      state.results = action.payload; // ✅ Direct assignment
    },
    setLoading(state, action) {
      state.Loading = true;
      action.payload = null;
    },
    setError(state, action) {
      state.Error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { setQuery, setActiveTab, setError, setLoading, setResults } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
