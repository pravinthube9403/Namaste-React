import React from "react";



// const RestroCard = (props) => {
//   const { resData } = props;
//   const { image, name, cuisine, rating, price } = resData;
//   return (
//     <div className="card-wrapper">
//       <div className="card-wrap">
//         <div className="card">
//           <img src={image} />

//           <h3 className="food-title">{name}</h3>
//           <p className="food-desc">{cuisine?.join(", ")}</p>
//           <p className="rating">{rating}</p>
//           <div className="food-bottom">
//             <span className="food-price">₹{resData.menu[0].price}</span>
//             <button className="order-btn">Order Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const RestroCard = ({ resData }) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrap">
        <div className="card">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/" +
              resData.cloudinaryImageId
            }
            alt={resData.name}
          />

          <h3 className="food-title">{resData.name}</h3>

          <p className="food-desc">{resData.cuisines?.join(", ")}</p>

          <p className="rating">⭐ {resData.avgRating}</p>

          <div className="food-bottom">
            <span className="food-price">₹{(resData.costForTwo/100).toFixed(2)}</span>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
