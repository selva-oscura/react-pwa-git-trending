import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <main className="Main container">
      <h5 className="header teal-text">Trending</h5>
      <div className="row trends">
        <Card
          title="Card Title"
          lang="JavaScript"
          starCount="299"
          forkCount="100"
          description="A set of best practices for JavaScript projects"
          link="url-here"
        />
      </div>
    </main>
  );
};

export default Main;
