import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <div className="h-screen text-white bg-gray-900 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage/>}/>
        </Routes>

        <ToastContainer />
      </div>
    </>
  );
};

export default App;
