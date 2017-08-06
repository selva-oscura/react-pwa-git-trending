import React from 'react';
import PropTypes from 'prop-types';
import BreakingText from './BreakingText';
import './Card.css';

const Card = ({title, lang, starCount, forkCount, description, link}) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card horizontal hoverable">
        <div className="card-stacked">
          <div className="card-content white-text">
            <span className="card-title">
              <BreakingText
                text={title}
              />
            </span>
            <div className="card-sub grey-text text-lighten-2">
              <i className="material-icons">info</i><span className="card-lang"> {lang}</span>
              <i className="material-icons">star</i><span className="card-stars"> {starCount}</span>
              <i className="material-icons">assessment</i><span className="card-forks"> {forkCount}</span>
            </div>
            <p>
              <BreakingText
                text={description}
              />
            </p>
          </div>
          <div className="card-action">
            <a href={link} className="card-link">Visit Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  starCount: PropTypes.number,
  forkCount: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
