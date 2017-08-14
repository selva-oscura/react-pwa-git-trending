import React from 'react';
import PropTypes from 'prop-types';
import BreakingText from './BreakingText';
import './Card.css';

const Card = ({ title, language, starCount, forkCount, description, link }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card horizontal hoverable">
        <div className="card-stacked">
          <div className="card-content white-text">
            <span className="card-title">
              {title ? <BreakingText text={title} /> : null}
            </span>
            <div className="card-sub grey-text text-lighten-2">
              <span className="card-lang">
                <i className="material-icons">info</i>&nbsp;{language || 'Unspecified'}
              </span>
              <span className="card-stars">
                <i className="material-icons">star</i>&nbsp;{starCount}
              </span>
              <span className="card-forks">
                <i className="material-icons">assessment</i>&nbsp;{forkCount}
              </span>
            </div>
            <p>
              {description ? <BreakingText text={description} /> : null}
            </p>
          </div>
          <div className="card-action">
            <a href={link} className="card-link">
              Visit Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.string,
  starCount: PropTypes.number,
  forkCount: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
