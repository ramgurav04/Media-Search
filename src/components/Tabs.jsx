import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setActiveTab} from '../redux/features/SearchSlice'


const Tabs = () => {
  const tabs = ["photos", "videos"];  

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-5 bg-gray-800 rounded-lg shadow-md">
      {tabs.map((ele, idx) => {
        return (
          <button
            className={`${activeTab === ele ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"} px-6 py-2 rounded-lg uppercase cursor-pointer transition-all duration-200 font-medium text-white`}
            onClick={() => {
              dispatch(setActiveTab(ele));  
            }}
            key={idx}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;