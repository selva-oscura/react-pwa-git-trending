const initialState = () => {
  if(localStorage && localStorage.gitUp){
    let gitUp = JSON.parse(localStorage.gitUp);
    const { repos, searchForm } = gitUp;
    repos.lastQuery = Object.assign({}, searchForm);
    return {
      repos,
      searchForm,
      errors: {
        messages: [],
        removalInProgress: false,
      },
      ajaxCalls: {
        callsInProgress: false,
      },
    };
  }

  return {
    repos: {
      totalCount: 0,
      items:[],
      lastUpdated: -Infinity,
      lastUpdatedLocal: -Infinity,
      lastQuery: {
        searchType: '',
        keyWords: '',
        language: '',
      },
    },
    searchForm: {
      searchType: 'top',
      keyWords: '',
      language: '',
    },
    errors: {
      messages: [],
      removalInProgress: false,
    },
    ajaxCalls:{
      callsInProgress: false,
    }
  }
}

export default initialState();
