import React from 'react';

const Card = ({title, lang, starCount, forkCount, description, link}) => {
  return (
      <div className="col s12 m4 card-template">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <div className="card-sub grey-text text-lighten-2">
              <i className="material-icons">info</i><span className="card-lang"> {lang}</span>
              <i className="material-icons">star</i><span className="card-stars"> {starCount}</span>
              <i className="material-icons">assessment</i><span className="card-forks"> {forkCount}</span>
            </div>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href={`https://github.com/${link}`} className="card-link">Visit Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;