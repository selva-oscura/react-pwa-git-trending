import React from 'react';
import Card from './Card';

const Main = ({cards}) => {
  return (
    <main className="Main container">
      <h5 className="header teal-text">Trending</h5>
      <div className="row trends">
        {cards.map((card, i) => (
          <Card
            key={i}
            title={card.full_name}
            lang={card.language}
            starCount={card.stargazers_count}
            forkCount={card.forks_count}
            description={card.description}
            link={card.html_url}
          />
      ))}
      </div>
    </main>
  );
};

export default Main;
