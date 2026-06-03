import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
const App = () => {
  return (
    <>
      <div className="h-screen text-white bg-gray-900 overflow-auto">
        <SearchBar />
        <Tabs/>
        <ResultGrid />
      </div>
    </>
  );
};

export default App;
