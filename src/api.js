import axios from 'axios';

const api = {
  getDates: function(){
    let dates = {}, now = new Date();
    dates.endDate = now.toISOString().slice(0,10);
    dates.startDate = new Date(now.getTime() - 7 * 1000 * 60 * 60 * 24).toISOString().slice(0,10);
    return dates;
  },

	// github
  queryGithub: function(searchType, searchTerm, language){
    let apiCall = "https://api.github.com/search/repositories?q=";
    if(searchType === "trending"){
      let dates = this.getDates();
      apiCall += `created:"${dates.startDate}+..+${dates.endDate}"`;
    }
    if(searchTerm){
      apiCall += `%20${searchTerm.split(" ").join("+")}`;
    }
    if(language){
      apiCall += `%20language:${language}`;
    }
    // fallback query for no dates, no searchTerm, & no language, GitHub API requires SOME query parameter
    if(searchType === "top" && !searchTerm && !language){
      apiCall += 'stars:>25000';
    }
    apiCall += '&sort=stars&order=desc';
    // console.log('apiCall', apiCall);
    return axios
      .get(apiCall)
      .then((response) => {
        // console.log('api.queryGithub response', response);
        return response;
      })
      .catch((error) => {
        // console.log('api.queryGithub error', error);
        throw error;
      });
  }
};

export default api;
