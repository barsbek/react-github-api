import { normalize } from 'normalizr';

import { statusLoading, statusFailure, statusOk } from './status';
import { saveEntities } from './entities';
import { client, schemas } from '../api';

export const loadUser = login => dispatch => {
  const url = `/users/${login}`;

  dispatch(fetchEntity( url, schemas.user ));
}

export const getRepos = login => dispatch => {
  const url = `/users/${login}/repos`;

  dispatch(fetchEntity( url, [ schemas.repo ] ));
}

const fetchEntity = (url, schema) => dispatch => {
  dispatch(statusLoading());

  return client(url).request()
    .then(res => {
      const normalized = normalize(res.data, schema);
      dispatch(saveEntities( normalized.entities ));
      dispatch(statusOk());
    })
    .catch(err => {
      const { response } = err;
      let message = 'Something went wrong';
      if(response && response.data.message) {
        message = response.data.message;
      }
      dispatch(statusFailure( message ));
    })
}
