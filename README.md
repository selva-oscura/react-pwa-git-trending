#react-pwa-git-trending

Basic offline page for viewing top and trending GitHub repositories 

To run:
* download or clone project (in terminal, type <code>git clone https://github.com/selva-oscura/react-pwa-git-trending.git</code>),
* switch to project directory (in terminal, type <code>cd react-pwa-git-trending</code>),
* install dependencies (in terminal, type <code>npm install</code>),
* run project (in terminal, type <code>npm start</code>),
* view in browser at localhost:3000


Basic idea, UI, and images cribbed from Chris Nwamba&apos;s &ldquo;Build a Progressive Web App: Offline Git Trending App&rdquo; ([Part 1](https://scotch.io/tutorials/build-a-progressive-web-app-offline-git-trending-app-part-1-concepts-and-service-workers), [Part 2](https://scotch.io/tutorials/build-an-offline-git-trending-pwa-part-2-caching-and-offline), [Part 3](https://scotch.io/tutorials/build-an-offline-git-trending-pwa-part-3-manifest-and-notifications), [Repo](https://github.com/christiannwamba/gittrends))

Changes made:
* Project made with React, bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* Additional query options (top v. trending, main language, keywords)
* Changed query to being triggered on click for Top/Trending/Refresh and after debounced changes to Keywords and Language text inputs (used [throttle-debounce](https://www.npmjs.com/package/throttle-debounce)) and removed submit button


Useful links for queries to the GitHub API:
[REST API v3 Getting Started](https://developer.github.com/v3/guides/getting-started/)
[Search Rest API v3](https://developer.github.com/v3/search/)
[Understanding the Search Syntax](https://help.github.com/articles/understanding-the-search-syntax/)
[Searching Repositories](https://help.github.com/articles/searching-repositories/)
[html encoding reference](http://krypted.com/utilities/html-encoding-reference/)