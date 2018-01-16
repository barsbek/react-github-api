const INITIAL_STATE = { error: false, loading: false, message: null }

export default (state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case 'STATUS_FAILURE': 
      return { error: true, loading: false, message: action.payload };
    case 'STATUS_LOADING':
      return { error: false, loading: true, message: action.payload }
    case 'STATUS_OK':
      return INITIAL_STATE
    default:
      return state;
  }
}
