import axios from 'axios';

const api = {
	// github
	// Trending
	gitHubTrending: function(dates){
    const apiCall = `https://api.github.com/search/repositories?q=created%3A%22${dates.startDate}+..+${dates.endDate}%22%20language%3Ajavascript&sort=stars&order=desc`;
    return axios
      .get(apiCall)
      .then((response) => {
        console.log('gitHub Trending response', response);
        return response;
      })
      .catch((error) => {
        console.log('gitHub Trending error', error);
        throw error;
      });
  }
}

export default api;
