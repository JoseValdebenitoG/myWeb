import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ title, image, text, repo, url }) {
  return (
    <div className="project-card text-center animate__animated animate__fadeInUp">
      <div className="project-card_overflow">
        <img src={image} className="project-card-img" />
      </div>
      <div className="project-card_overlay">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
        <div className="card-buttons-wrap">
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger"
            >
              <i className="bi bi-github"></i>
            </a>
          ) : (
            " "
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger"
          >
            <i className="bi bi-window"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
// importamos prop-types que debemos instalarlo desde npm
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  repo: PropTypes.string,
  url: PropTypes.string,
};

export default ProjectCard;
