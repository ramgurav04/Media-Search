import React from "react";
import { useDispatch } from "react-redux";
import { addToCollection , addToast } from "../redux/features/CollectinSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addCollection = (item) => {
    dispatch(addToCollection(item));
    dispatch(addToast()); 
  };
    
  return (
    <div className="relative w-[18vw] min-w-[200px] bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        {item.type === "photo" ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            controls
            src={item.src}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            poster={item.thumbnail}
          />
        )}
      </div>

      <div className="p-3 bg-gradient-to-t from-black/90 to-black/40">
        <h3 className="text-sm font-medium text-white truncate">
          {item.title || "Untitled"}
        </h3>
        <p className="text-xs text-gray-300 mt-0.5 capitalize">{item.type}</p>
      </div>

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          View {item.type} →
        </a>
        <button
          onClick={() => {
            addCollection(item);
          }}
          className="bg-blue-600 text-sm font-medium py-2 px-4 rounded-lg  transition-colors ml-0.5 hover:bg-blue-950"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
