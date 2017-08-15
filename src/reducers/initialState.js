const initialState = () => {
  const localStore = localStorage;
  let initialState;
  console.log('localStore', localStore);
  if(localStore && localStore.gitUp){
    console.log("localStorage and gitUp data in localStorage");
    initialState = localStore.gitUp;
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
  return initialState;
}

export default initialState();
