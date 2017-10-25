import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ queryGitHub }) => {
  const handleClick = e => {
    let refresh = document.getElementById('refresh');
    refresh.className = refresh.className + ' rotate';
    queryGitHub();
    setTimeout(() => {
      refresh.className = refresh.className.slice(0, -7);
    }, 2000);
  };
  return (
    <nav className="Nav nav-wrapper teal">
      <div className="brand-logo teal">
        <svg
          aria-hidden="true"
          className="octicon navbar"
          version="1.1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </div>
      <button id="refresh" className="right teal refresh" onClick={handleClick}>
        <svg
          width="24px"
          height="32px"
          viewBox="0 0 12 16"
          version="1.1"
          alt="refresh"
        >
          <title>sync</title>
          <g fillRule="evenodd">
            <path d="M10.24,7.4 C10.43,8.68 10.04,10.02 9.04,11 C7.57,12.45 5.3,12.63 3.63,11.54 L4.8,10.4 L0.5,9.8 L1.1,14 L2.41,12.74 C4.77,14.48 8.11,14.31 10.25,12.2 C11.49,10.97 12.06,9.35 11.99,7.74 L10.24,7.4 L10.24,7.4 Z M2.96,5 C4.43,3.55 6.7,3.37 8.37,4.46 L7.2,5.6 L11.5,6.2 L10.9,2 L9.59,3.26 C7.23,1.52 3.89,1.69 1.74,3.8 C0.5,5.03 -0.06,6.65 0.01,8.26 L1.76,8.61 C1.57,7.33 1.96,5.98 2.96,5 L2.96,5 Z" />
          </g>
        </svg>
      </button>
    </nav>
  );
};

Nav.propTypes = {
  queryGitHub: PropTypes.func.isRequired,
};

export default Nav;

// <img id="refresh" src={syncOcticon} alt="refresh" className="octicons" />
