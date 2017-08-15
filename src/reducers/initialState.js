export default {
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
