import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTbs } from "../redux/features/SearchSlice";

const Tabs = () => {
  // const tabs = ['All', 'Images', 'Videos', 'News', 'Maps', 'Books']
  const tabs = ["photos", "vidios"];

  const dispatch = useDispatch();
  
  const activetab = useSelector((state)=>state.search.activeTab)

  return (
    <>
      <div className="flex gap-10 p-10">
        {tabs.map((ele, idx) => {
          return (
            <button
              className={`${activetab==ele?'':''} bg-gray-900 px-5 py-3 uppercase cursor-pointer`}  
              onClick={() => {
                dispatch(setActiveTbs(ele));
              }}
              key={idx}
            >
              {ele}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
