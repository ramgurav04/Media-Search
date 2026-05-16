import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search ",
  initialState: {
    query: "",
    activeTab: "",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTbs(state, action) {
      state.ActiveTbs = action.payload;
    },
    setResults(state, action) {
      state.Results = action.payload;
    },
    setLoading(state, action) {
      state.Loading = true;
      action.payload = null;
    },
    setError(state, action) {
      state.Error = action.payload;
      state.loading = false;
    },
    clearResults(state){
        state.results = []
    }
  },
});

export const { setQuery, setActiveTbs, setError, setLoading, setResults } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
