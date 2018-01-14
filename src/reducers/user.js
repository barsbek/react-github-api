const INITIAL_STATE = { user: null, loading: false, error: false }

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'USER_REQUEST':
      return { ...state, loading: true };
    case 'USER_SUCCESS':
      return { user: action.user, loading: false, error: false }
    case 'USER_FAILURE': 
      return { user: null, loading: false, error: action.message }
    default:
      return state;
  }
}
