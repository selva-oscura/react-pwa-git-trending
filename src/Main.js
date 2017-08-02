import React from 'react';
import GitForm from './GitForm';
import Card from './Card';

const Main = ({form, submitForm, updateFormState, updateSearchType, cards, lastUpdated}) => {
  return (
    <main className="Main container">
      <GitForm
        form={form}
        submitForm={submitForm}
        updateFormState={updateFormState}
        updateSearchType={updateSearchType}
      />
      <div className="row">
        <h5 className="header teal-text">Trending</h5>
        <h6>Last Updated: {lastUpdated>0 ? lastUpdated : "never"}</h6>
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

export default Main;
