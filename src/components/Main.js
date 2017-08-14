import React from 'react';
import PropTypes from 'prop-types';
import GitForm from './GitForm';
import ErrorMessages from './ErrorMessages';
import Loading from './Loading';
import SearchSummary from './SearchSummary';
import Cards from './Cards';

const Main = ({
  errors,
  ajaxCallsInProgress,
  searchForm,
  updateSearchTextInput,
  updateSearchType,
  cards,
  lastSearchParameters,
  lastUpdated,
  lastUpdatedLocal,
}) => {
  return (
    <main className="Main container">
      <GitForm
        searchForm={searchForm}
        updateSearchTextInput={updateSearchTextInput}
        updateSearchType={updateSearchType}
      />

      {errors.messages && errors.messages.length
        ? <ErrorMessages
            errorMessages={errors.messages}
            errorRemovalInProgress={errors.removalInProgress}
          />
        : null}

      <SearchSummary
        lastSearchParameters={lastSearchParameters}
        lastUpdated={lastUpdated}
        lastUpdatedLocal={lastUpdatedLocal}
      />

      <Loading ajaxCallsInProgress={ajaxCallsInProgress} />

      <Cards cards={cards} />
    </main>
  );
};

Main.propTypes = {
  errors: PropTypes.object.isRequired,
  ajaxCallsInProgress: PropTypes.bool.isRequired,
  searchForm: PropTypes.object.isRequired,
  updateSearchTextInput: PropTypes.func.isRequired,
  updateSearchType: PropTypes.func.isRequired,
  cards: PropTypes.array,
  lastUpdated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lastUpdatedLocal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Main;
