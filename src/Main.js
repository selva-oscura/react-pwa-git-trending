import React from 'react';

const Main = () => {
  return (
    <main className="Main container">
      <h5 className="header teal-text">Trending</h5>
      <div className="row trends">
        <div className="col s12 m4 card-template">
          <div className="card horizontal">
            <div className="card-stacked">
              <div classNames="card-content white-text">
                <span className="card-title">Card Title</span>
                <div className="card-sub grey-text text-lighten-2">
                  <i className="material-icons">info</i><span className="card-lang"> JavaScript</span>
                  <i className="material-icons">star</i><span className="card-stars"> 299</span>
                  <i className="material-icons">assessment</i><span claclassName="card-forks"> 100</span>
                </div>
                <p>A set of best practices for JavaScript projects</p>
              </div>
              <div className="card-action">
                <a className="#" className="card-link">Visit Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
