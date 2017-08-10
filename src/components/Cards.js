import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({cards}) => {
	return (
    <div className="section">
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
    </div>
	);
};

Cards.propTypes = {
	cards: PropTypes.array,
};

export default Cards;
