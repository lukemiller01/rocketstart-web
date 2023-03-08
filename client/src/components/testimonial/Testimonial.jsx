import React from "react";
import "./testimonial.css";

// Bookmarked component
const Testimonial = ({ name, title, image, review }) => {
  return (
    <div className="testimonial">
      <div className="rating">
        <span className="material-symbols-outlined">grade</span>
        <span className="material-symbols-outlined">grade</span>
        <span className="material-symbols-outlined">grade</span>
        <span className="material-symbols-outlined">grade</span>
        <span className="material-symbols-outlined">grade</span>
      </div>
      <p className="review__text">{review}</p>
      <div className="biographical">
        <div className="biographical__image">
          <img
            className="profile__picture"
            src={image}
            alt="rocketstart user profile"
          ></img>
        </div>
        <div className="biographical__text">
          <h5>{name}</h5>
          <p className="title__text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
