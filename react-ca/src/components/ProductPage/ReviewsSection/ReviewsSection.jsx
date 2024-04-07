import React from "react";
import "../ProductPage.scss";

/**
 * Displays a list of reviews for a product. Each review includes the username,
 * their comment, and rating.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.reviews - An array of review objects to display.
 *
 * @returns {React.ReactElement} A section containing the product's reviews.
 */

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>
            <strong>{review.username}</strong>: {review.description} -{" "}
            {review.rating} Stars
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
