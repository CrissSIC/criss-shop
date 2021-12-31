import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "../Stars.css";

const StarRating = () => {
  const [rating, setRating] = useState();

  return (
    <div className="stars-container">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label className="star-container">
            <input
              type="radio"
              className="input-radio-stars"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <AiFillStar
              className="star"
              size={25}
              color={ratingValue <= rating ? "#ffc107" : "lightgray"}
            />
          </label>
        );
      })}
      <span className="review-count">(0)</span>
    </div>
  );
};

export default StarRating;
