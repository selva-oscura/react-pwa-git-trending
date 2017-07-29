import React from 'react';
import GitForm from './GitForm';
import Card from './Card';

const Main = ({form, submitForm, updateFormState, cards}) => {
  return (
    <main className="Main container">
      <GitForm
        form={form}
        submitForm={submitForm}
        updateFormState={updateFormState}
      />
      <h5 className="header teal-text">Trending</h5>
      <div className="row trends">
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
