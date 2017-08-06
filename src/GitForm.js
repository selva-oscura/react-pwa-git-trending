import React from 'react';
import PropTypes from 'prop-types';

const GitForm = ({form, submitForm, updateFormState, updateSearchType}) => {
  const buttonColour = buttonType => {
    return form.searchType === buttonType ? "btn waves-effect teal waves-light" : "btn waves-effect grey waves-teal"
  }
  const handleClick = (e) => {
    e.preventDefault();
    updateSearchType(e.target.id)
  };
  return (
    <div className="GitForm row">
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
              onChange={updateFormState}
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
              onChange={updateFormState}
            />
          </label>
        </div>
        <div
          className="col s6 m2"
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
          className="col s6 m2"
        >
          <button
            className={buttonColour('trending')}
            id="trending"
            onClick={handleClick}
          >
            Trending
          </button>
        </div>
        <div className="col s12 m4 offset-m4">
          <button
            className="btn teal waves-effect waves-light"
            type="submit"
            onClick={submitForm}
          >
            Update<i className="material-icons right">send</i>
          </button>
        </div>
     </form>
    </div>
  );
};

GitForm.propTypes = {
  form: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
  updateFormState: PropTypes.func.isRequired,
  updateSearchType: PropTypes.func.isRequired,
};

export default GitForm;
