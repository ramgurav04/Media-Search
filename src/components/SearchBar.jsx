import React, { useState } from "react";
import { useDispatch } from 'react-redux'   
import { setQuery } from '../redux/features/SearchSlice'

export const SearchBar = () => {
  const [text, setText] = useState("");
  
  const dispatch = useDispatch()   

  const submitHandler = (e) => { 
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
  };

  return (
    <div>
      <form className="flex gap-5 p-10 bg-(--c1) rounded-lg shadow-lg" onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          type="text"
          placeholder="Search Anything"
          className="border-2 border-gray-600 px-4 py-2 text-xl rounded-lg outline-none w-full bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500 transition-colors duration-200"
        />
        <button
          type="submit" 
          className="border-2 border-blue-600 px-6 py-2 text-xl rounded-lg outline-none cursor-pointer active:scale-95 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-medium"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;