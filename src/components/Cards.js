import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Card from './Card';

const Cards = ({ cards }) => {
  const masonryOptions = {
    transitionDuration: 0,
  }
  return (
    <div className="section">
      <div className="row">
        <Masonry 
          options={masonryOptions}
        >
          {cards && cards.length > 0
            ? cards.map((card, i) =>
                <Card
                  key={i}
                  title={card.full_name}
                  language={card.language}
                  starCount={card.stargazers_count}
                  forkCount={card.forks_count}
                  description={card.description}
                  link={card.html_url}
                />
              )
            : <p>No results found</p>
          }
        </Masonry>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
