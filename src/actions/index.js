import axios from 'axios';

const API_URL = 'https://api.github.com';

const userRequest = () => ({ type: 'USER_REQUEST' });
const userSuccess = user => ({ type: 'USER_SUCCESS', user, });
const userFailure = message => ({ type: 'USER_FAILURE', message });

export const getUserInfo = login => dispatch => {
  const url = `${API_URL}/users/${login}`;
  dispatch(userRequest());
  axios.get(url)
  .then(response => {
    dispatch(userSuccess( response.data ));
  })
  .catch(err => {
    const { response } = err;
    let message = 'Something went wrong';
    if(response && response.data.message) {
      message = response.data.message;
    }
    dispatch(userFailure( message ));
  })
}

