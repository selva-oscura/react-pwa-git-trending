import axios from 'axios';

const api = {
	// github
	// Trending
	gitHubTrending: function(dates, language){
    // language = language || "javascript";
    let apiCall = `https://api.github.com/search/repositories?q=created%3A%22${dates.startDate}+..+${dates.endDate}"`
    if(language){
      apiCall += `%20language%3A${language}`;
    }
    apiCall += `&sort=stars&order=desc`;
    console.log('apiCall', apiCall)
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
