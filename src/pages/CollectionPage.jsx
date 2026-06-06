import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/CollectinSlice";
import CollectinCard from "./CollectinCard";
import Navbar from "../components/Navbar";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-4   px-3 py-3  overflow-auto py-6">
        {collection.map((items, idx) => {
          return (
            <div key={idx}>
              <CollectinCard item={items} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionPage;
