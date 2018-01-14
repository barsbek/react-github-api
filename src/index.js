import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './containers/DevTools';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // split store for dev and prod
    DevTools.instrument(),
  )
)

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
