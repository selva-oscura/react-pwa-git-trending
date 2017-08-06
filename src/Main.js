import React from 'react';
import PropTypes from 'prop-types';
import GitForm from './GitForm';
import ErrorMessages from './ErrorMessages';
import Card from './Card';

const Main = ({errors, form, updateFormState, updateSearchType, cards, lastSearchParameters, lastUpdated, lastUpdatedLocal}) => {
  const resultsText = () => {
    let text = `${lastSearchParameters.searchType} results`;
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
    <main className="Main container">
      <GitForm
        form={form}
        updateFormState={updateFormState}
        updateSearchType={updateSearchType}
      />
      { errors.length ? <ErrorMessages errors={errors} /> : null}
      <div className="row">
        <h5 className="header teal-text">{resultsText()}</h5>
        <h6>Last Updated: {typeof lastUpdatedLocal === "string" ? lastUpdatedLocal : "never"}</h6>
      </div>
      <div className="row">
        { cards && cards.length > 0 ? (
          cards.map((card, i) => (
            <Card
              key={i}
              title={card.full_name}
              lang={card.language}
              starCount={card.stargazers_count}
              forkCount={card.forks_count}
              description={card.description}
              link={card.html_url}
            />
        ))) : (
          <p>No results found</p>
        )}
      </div>
    </main>
  );
};

Main.propTypes = {
  errors: PropTypes.array,
  form: PropTypes.object.isRequired,
  updateFormState: PropTypes.func.isRequired,
  updateSearchType: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  lastUpdated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lastUpdatedLocal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Main;
