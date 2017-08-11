import React from 'react';
import PropTypes from 'prop-types';

const GitForm = ({form, updateSearchTextInput, updateSearchType}) => {
  const buttonColour = buttonType => {
    return form.searchType === buttonType ? "col s10 offset-s1 m8 offset-m2 btn waves-effect teal waves-light" : "btn col s10 offset-s1 m8 offset-m2 waves-effect grey waves-teal"
  }
  const handleClick = (e) => {
    e.preventDefault();
    updateSearchType(e.target.id)
  };
  return (
    <div className="GitForm section">
      <div className="row">
        <form>
          <div
            className="col s12 m6"
          >
            <label htmlFor="keyWords">Keyword(s)
              <input
                className="active"
                type="text"
                id="keyWords"
                value={form.keyWords}
                onChange={updateSearchTextInput}
              />
            </label>
          </div>
          <div
            className="col s12 m6"
          >
            <label htmlFor="language">Language
              <input
                className="active"
                type="text"
                id="language"
                value={form.language}
                onChange={updateSearchTextInput}
              />
            </label>
          </div>
          <div
            className="col s6"
          >
            <button
              className={buttonColour('top')}
              id="top"
              onClick={handleClick}
            >
              Top
            </button>
          </div>
          <div
            className="col s6"
          >
            <button
              className={buttonColour('trending')}
              id="trending"
              onClick={handleClick}
            >
              Trending
            </button>
          </div>
       </form>
      </div>
    </div>
  );
};

GitForm.propTypes = {
  form: PropTypes.object.isRequired,
  updateSearchTextInput: PropTypes.func.isRequired,
  updateSearchType: PropTypes.func.isRequired,
};

export default GitForm;
