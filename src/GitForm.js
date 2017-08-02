import React from 'react';

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
          <label htmlFor="searchTerm">Search Term(s)
            <input
              className="active"
              type="text"
              id="searchTerm"
              value={form.searchTerm}
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
            name="action"
            onClick={submitForm}
          >
            Update<i className="material-icons right">send</i>
          </button>
        </div>
     </form>
    </div>
  );
};

export default GitForm;
