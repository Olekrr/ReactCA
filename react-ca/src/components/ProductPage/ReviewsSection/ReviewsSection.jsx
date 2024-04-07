import React from "react";
import "../ProductPage.scss"; 

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <p><strong>{review.username}</strong>: {review.description} - {review.rating} Stars</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
