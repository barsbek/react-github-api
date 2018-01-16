export const statusLoading = message => ({
  type: 'STATUS_LOADING',
  payload: message || 'Loading...'
});

export const statusFailure = message => ({
  type: 'STATUS_FAILURE',
  payload: message
});

export const statusOk = message => ({
  type: 'STATUS_OK',
  payload: message || ''
});
