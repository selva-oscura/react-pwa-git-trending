import axios from 'axios';

const api = {
  getDates: function(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  },

	// github
  queryGitHub: function(searchType, keyWords, language){
    let apiCall = "https://api.github.com/search/repositories?q=";
    if(searchType === "trending"){
      let dates = this.getDates();
      apiCall += `created:"${dates.startDate}+..+${dates.endDate}"`;
    }
    if(keyWords){
      apiCall += `%20${keyWords.split(" ").join("+")}`;
    }

    if(language){
      if (keyWords) {
        apiCall += "&";
      } else {
        apiCall += "%20";
      }
      apiCall += `language:${language}`;
    }
    // fallback query for no dates, no keyWords, & no language, GitHub API requires SOME query parameter
    if(searchType === "top" && !keyWords && !language){
      apiCall += 'stars:>25000';
    }
    apiCall += '&sort=stars&order=desc';
    console.log('apiCall', apiCall);
    return axios
      .get(apiCall)
      .then((response) => {
        // console.log('api.queryGitHub response', response);
        return response;
      })
      .catch((error) => {
        // console.log('api.queryGitHub error', error);
        throw error;
      });
  }
};

export default api;
