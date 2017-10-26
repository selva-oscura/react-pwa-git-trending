# GitUp

Basic offline page for viewing top and trending GitHub repositories (internet connection required for initial load and for updates, but most recently viewed results will remain available offline).

See it live at [online](https://selva-oscura.github.io/react-pwa-git-trending) or clone it and run it yourself.

![GitUp](https://github.com/selva-oscura/react-pwa-git-trending/blob/master/gitup_screenshot.png)

To run locally (directions assume that you have node (v.6+), npm, and git installed):
* download or clone project (in terminal, type <code>git clone https://github.com/selva-oscura/react-pwa-git-trending.git</code>),
* switch to project directory (in terminal, type <code>cd react-pwa-git-trending</code>),
* install dependencies (in terminal, type <code>yarn install</code> or <code>npm install</code>),
* run project (in terminal, type <code>yarn start</code> or <code>npm start</code>),
* view in browser at localhost:3000


Basic idea, UI, and images cribbed from Chris Nwamba&apos;s &ldquo;Build a Progressive Web App: Offline Git Trending App&rdquo; ([Part 1](https://scotch.io/tutorials/build-a-progressive-web-app-offline-git-trending-app-part-1-concepts-and-service-workers), [Part 2](https://scotch.io/tutorials/build-an-offline-git-trending-pwa-part-2-caching-and-offline), [Part 3](https://scotch.io/tutorials/build-an-offline-git-trending-pwa-part-3-manifest-and-notifications), [Repo](https://github.com/christiannwamba/gittrends))

Changes made:
* Project made with React, bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* Used [axios](https://www.npmjs.com/package/axios), not fetch, for queries
* Additional query options (top v. trending, main language, keywords)
* Changed query to being triggered on click for Top/Trending/Refresh and after changes to Keywords and Language text inputs (debounced text input changes, using [throttle-debounce](https://www.npmjs.com/package/throttle-debounce)) and removed submit button
* added [Redux](https://www.npmjs.com/package/redux), as well as [react-redux](https://www.npmjs.com/package/react-redux) and [redux-thunk](https://www.npmjs.com/package/redux-thunk) -- complete overkill for so small a project, but good opportunity for me to practice adding Redux to a project
* added Loading spinner for query in progress
* applied masonry.js to card components, using [react-masonry-component](https://www.npmjs.com/package/react-masonry-component)
* saved state to localStorage
* deployed to github pages

Useful links for queries to the GitHub API:
* [REST API v3 Getting Started](https://developer.github.com/v3/guides/getting-started/)
* [Search Rest API v3](https://developer.github.com/v3/search/)
* [Understanding the Search Syntax](https://help.github.com/articles/understanding-the-search-syntax/)
* [Searching Repositories](https://help.github.com/articles/searching-repositories/)
* [html encoding reference](http://krypted.com/utilities/html-encoding-reference/)
