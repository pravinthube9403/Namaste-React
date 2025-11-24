import React from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  
  // Local state variable
  const [ListOfRestaurent, setListOfRestaurent] = useState(resList);

  return (
    <div className="body">
      <div className="search-wrapper">
        <button
          onClick={() => {
            const Filtered = ListOfRestaurent.filter((res) => res.rating > 4);
            setListOfRestaurent(Filtered);
          }}
        >
          search
        </button>
      </div>
      <div className="res-wrapper">
        {ListOfRestaurent.map((restaurent) => {
          return <RestroCard key={restaurent.id} resData={restaurent} />;
        })}
      </div>
    </div>
  );
};
export default Body;
