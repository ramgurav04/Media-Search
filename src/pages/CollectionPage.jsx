import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/CollectinSlice";
import CollectinCard from "./CollectinCard";
import Navbar from "../components/Navbar";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredItems = () => {
    if (activeTab === "all") return collection;
    if (activeTab === "photos") return collection.filter(item => item.type === "photo");
    if (activeTab === "videos") return collection.filter(item => item.type === "video");
    return collection;
  };

  const filteredItems = getFilteredItems();
  
  const counts = {
    all: collection.length,
    photos: collection.filter(item => item.type === "photo").length,
    videos: collection.filter(item => item.type === "video").length
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-4 border-b border-gray-700 px-4 bg-gray-900">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 text-sm font-medium transition-all relative ${
            activeTab === "all"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          All
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
            {counts.all}
          </span>
        </button>
        
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-4 py-2 text-sm font-medium transition-all relative ${
            activeTab === "photos"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Photos
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
            {counts.photos}
          </span>
        </button>
        
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 text-sm font-medium transition-all relative ${
            activeTab === "videos"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Videos
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
            {counts.videos}
          </span>
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 px-3 py-6 overflow-auto">
        {filteredItems.length === 0 ? (
          <div className="w-full text-center text-gray-400 py-20">
            No {activeTab !== "all" ? activeTab : ""} items in your collection
          </div>
        ) : (
          filteredItems.map((items, idx) => (
            <div key={idx}>
              <CollectinCard item={items} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CollectionPage;