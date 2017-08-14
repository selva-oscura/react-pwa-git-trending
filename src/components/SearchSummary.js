import React from 'react';
import PropTypes from 'prop-types';

const SearchSummary = ({lastSearchParameters, lastUpdated, lastUpdatedLocal}) => {
  const resultsText = () => {
    let text = `${lastSearchParameters.searchType} repositories`;
    if(lastSearchParameters.keyWords || lastSearchParameters.language){
      text += " for ";
    }
    if(lastSearchParameters.keyWords){
      text += "keyword";
      if(lastSearchParameters.keyWords.includes(' ')){
        text+="s";
      }
      text += `: ${lastSearchParameters.keyWords}`;
    }
    if(lastSearchParameters.keyWords && lastSearchParameters.language){
      text += " and ";
    }
    if(lastSearchParameters.language){
      text += `language: ${lastSearchParameters.language}`;
    }
    return text.toUpperCase();
  }
	return (
	  <div className="section">
	    <div className="row">
	      <h5 className="header teal-text">{resultsText()}</h5>
	      <h6>Last Updated: {typeof lastUpdatedLocal === "string" ? lastUpdatedLocal : "never"}</h6>
	    </div>
	  </div>
	);	
};

SearchSummary.propTypes = {
  lastUpdated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lastUpdatedLocal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SearchSummary;
