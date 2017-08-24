import React from 'react';
import PropTypes from 'prop-types';
import './SearchSummary.css';

const SearchSummary = ({
  lastSearch,
  lastUpdated,
  lastUpdatedLocal,
}) => {
  // console.log('lastSearch, lastUpdated, lastUpdatedLocal from searchSummary, line 10',lastSearch, lastUpdated, lastUpdatedLocal);
  const resultsText = () => {
    let text = `${lastSearch.searchType} repositories`;
    if (lastSearch.keyWords || lastSearch.language) {
      text += ' for ';
    }
    if (lastSearch.keyWords) {
      text += 'keyword';
      if (lastSearch.keyWords.includes(' ')) {
        text += 's';
      }
      text += `: ${lastSearch.keyWords}`;
    }
    if (lastSearch.keyWords && lastSearch.language) {
      text += ' and ';
    }
    if (lastSearch.language) {
      text += `language: ${lastSearch.language}`;
    }
    return text.toUpperCase();
  };
  return (
    <div id="SearchSummary" className="section">
      <div className="row">
        <h5 className="header teal-text">
          {resultsText()}
        </h5>
        <h6>
          Last Updated:{' '}
          {typeof lastUpdatedLocal === 'string' ? lastUpdatedLocal : 'never'}
        </h6>
      </div>
    </div>
  );
};

SearchSummary.propTypes = {
  lastSearch: PropTypes.object.isRequired,
  lastUpdated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lastUpdatedLocal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SearchSummary;
