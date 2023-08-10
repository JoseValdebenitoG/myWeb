import React from "react";
import PropTypes from "prop-types";
import "../styles/coursesCards.css";

function CoursesCard({ title, image, text }) {
  return (
    <div className="courses-card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={image} className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
      </div>
    </div>
  );
}
// importamos prop-types que debemos instalarlo desde npm
CoursesCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default CoursesCard;
