import React from 'react';
import PropTypes from 'prop-types';
import BreakingText from './BreakingText';
import infoOcticon from '../images/info.svg';
import forksOcticon from '../images/repo-forked.svg';
import starOcticon from '../images/star.svg';
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
                <img
                  src={infoOcticon}
                  alt="info language"
                  className="octicons"
                />
                {language || 'Unspecified'}&nbsp;
              </span>
              <span className="card-stars">
                <img src={starOcticon} alt="star count" className="octicons" />
                {starCount}&nbsp;
              </span>
              <span className="card-forks">
                <img
                  src={forksOcticon}
                  alt="forks count"
                  className="octicons"
                />
                {forkCount}
              </span>
            </div>
            <p>
              {description ? <BreakingText text={description} /> : null}
            </p>
          </div>
          <div className="card-action">
            <a href={link} className="card-link amber-text text-lighten-1">
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
