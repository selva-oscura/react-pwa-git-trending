const initialState = () => {
  const localStore = localStorage;
  let initialState;
  console.log('localStore', localStore);
  if(localStore && localStore.gitUp){
    console.log("localStorage and gitUp data in localStorage");
    const { repos, searchForm, errors, ajaxCalls } = localStorage.gitUp;
    initialState = {
      repos,
      searchForm,
      errors,
      ajaxCalls,
    };
  } else{
    console.log("no localStorage or no gitUp data in localStorage");
    initialState = {
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
  console.log('basing initialState on localStorage', localStore && localStore.gitUp, '\ninitialState is', initialState);
  return initialState;
}

export default initialState();
