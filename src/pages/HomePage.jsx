import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  console.log(query);

  return (
    <>
      <Navbar />

      <SearchBar />

      {query != "" ? (
        <div>
          <Tabs />

          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
