import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <>
      <div className="h-screen text-white bg-gray-900">
        <SearchBar />
        <Tabs/>
      </div>
    </>
  );
};

export default App;
