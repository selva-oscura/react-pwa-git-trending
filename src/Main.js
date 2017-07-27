import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <main className="Main container">
      <h5 className="header teal-text">Trending</h5>
      <div className="row trends">
        <Card />
      </div>
    </main>
  );
};

export default Main;
