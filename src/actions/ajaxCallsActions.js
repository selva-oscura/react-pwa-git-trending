import * as types from './actionTypes';

export function updateAjaxCallsSuccess(ajaxCalls) {
  return { type: types.UPDATE_AJAX_CALLS_SUCCESS, ajaxCalls};
};

export function updateAjaxCalls(ajaxCalls) {
  return function(dispatch) {
    let {callsInProgress} = ajaxCalls;
    dispatch(updateAjaxCallsSuccess({
      callsInProgress: callsInProgress,
    }));
  };
};
