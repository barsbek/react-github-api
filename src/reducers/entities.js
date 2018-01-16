const INITIAL_STATE = {users: {}, repos: {}}

export default function(state=INITIAL_STATE, action) {
  if(action.type === 'SAVE_ENTITIES') {
    return { ...state, ...action.payload }
  }
  return state;
}

