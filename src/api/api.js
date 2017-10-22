import axios from 'axios';

const api = {
  getDates: function(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  },

	// github
  queryGH: function(searchType, keyWords, language){
    let apiCall = "https://api.github.com/search/repositories?q=";
    if (keyWords) {
      apiCall += `${keyWords.split(" ").join("+")}`;
    }
    if (language) {
      if (keyWords) {
        apiCall += "%20";
      }
      apiCall += `language:${language}`;
    }
    if (searchType && searchType === "trending") {
      let dates = this.getDates();
      if(keyWords || language){
        apiCall += "%20"        
      }
      apiCall += `created:%22${dates.startDate}+..+${dates.endDate}%22`;
    }

    // fallback query for no dates, no keyWords, & no language, GitHub API requires SOME query parameter
    if ((!searchType || searchType === "top") && !keyWords && !language){
      apiCall += 'stars:%3E25000';
    }
    apiCall += '&sort=stars&order=desc';
    // console.log('apiCall from inside the api call', apiCall);

    return axios
      .get(apiCall)
      .then((response) => {
        // console.log('api.queryGitHub response', response);
        return response;
      })
      .catch((error) => {
        console.log("error from inside api.queryGitHub", error);
        throw error;
      });
  }
};

export default api;
