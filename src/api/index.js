import axios from 'axios';
import { schema } from 'normalizr';


const {
  REACT_APP_API_BASE_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET
} = process.env;

const baseURL = REACT_APP_API_BASE_URL || 'https://api.github.com/';
const params = {
  client_id: REACT_APP_CLIENT_ID,
  client_secret: REACT_APP_CLIENT_SECRET
};

export const client = (url, method = 'get') => {
  method = method.toLowerCase();
  return axios.create({ method, baseURL, url, params });
}


const user = new schema.Entity('users', {
  repos: [ repo ]
}, {
  idAttribute: user => user.login
});

const repo = new schema.Entity('repos', {
  owner: user
});

export const schemas = {
  user,
  repo,
  repos: [ repo ]
}
