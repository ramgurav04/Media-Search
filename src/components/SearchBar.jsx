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
      <form className="flex gap-5 p-10 bg-gray-800" onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          type="text"
          placeholder="Search Anything"
          className="border-2 px-2 text-xl rounded outline-none w-full"
        />
        <button
          type="submit" 
          className="border-2 px-2 text-xl rounded outline-none cursor-pointer active:scale-0.95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;