import React from "react";
import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // Local state variable
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);

  useEffect(() => {
    console.log("useEffect Function");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5614219&lng=73.7452357&str=Non-Veg%20Restaurants&trackingId=1b701a3c-4e2f-58d1-8b57-514f68762536&submitAction=ENTER&queryUniqueId=c6f84b7e-80ff-4eb2-af02-12c93e3d243e"
    );

    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
        (item) => item.card.card.info
      ) || [];
    console.log(restaurants);
    setListOfRestaurent(restaurants);
  };
  //Conditional rendering
  // if (ListOfRestaurent.length == 0) {
  //   return <Shimmer />;
  // }

  return ListOfRestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="container">
        <div className="search-wrapper">
          <button
            onClick={() => {
              const Filtered = ListOfRestaurent.filter((res) => {
                const rating = Number(res?.avgRating);
                return rating >= 4;
              });
              setListOfRestaurent(Filtered);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="res-wrapper">
          {ListOfRestaurent.map((restaurent) => {
            return <RestroCard key={restaurent.id} resData={restaurent} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
