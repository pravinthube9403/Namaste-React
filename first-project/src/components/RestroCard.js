import React from "react";



const RestroCard = (props) => {
  const { resData } = props;
  const { image, name, cuisine, rating, price } = resData;
  return (
    <div className="card-wrapper">
      <div className="card-wrap">
        <div className="card">
          <img src={image} />

          <h3 className="food-title">{name}</h3>
          <p className="food-desc">{cuisine?.join(", ")}</p>
          <p className="rating">{rating}</p>
          <div className="food-bottom">
            <span className="food-price">₹{resData.menu[0].price}</span>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestroCard;