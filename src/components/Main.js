import React from 'react';
import PropTypes from 'prop-types';
import GitForm from './GitForm';
import ErrorMessages from './ErrorMessages';
import SearchSummary from './SearchSummary';
import Cards from './Cards';

const Main = ({errors, form, updateFormState, updateSearchType, cards, lastSearchParameters, lastUpdated, lastUpdatedLocal}) => {
  return (
    <main className="Main container">
      
      <GitForm
        form={form}
        updateFormState={updateFormState}
        updateSearchType={updateSearchType}
      />

      { errors.length ? <ErrorMessages errors={errors} /> : null}
      
      <SearchSummary
        lastSearchParameters={lastSearchParameters}
        lastUpdated={lastUpdated}
        lastUpdatedLocal={lastUpdatedLocal}
      />

      <Cards
        cards={cards}
      />

    </main>
  );
};

Main.propTypes = {
  errors: PropTypes.array,
  form: PropTypes.object.isRequired,
  updateFormState: PropTypes.func.isRequired,
  updateSearchType: PropTypes.func.isRequired,
  cards: PropTypes.array,
  lastUpdated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lastUpdatedLocal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Main;
