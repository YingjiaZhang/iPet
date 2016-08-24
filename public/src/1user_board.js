import React, {Component} from 'react';   // eslint-disable-line no-unused-vars
import {render} from 'react-dom';   // eslint-disable-line no-unused-vars
import Doctor from './container/Doctor';
import doctor from './reducers/doctor';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import doctorRequestMiddleware from './middlewares/doctorRequestMiddleware';

const store = createStore(
    doctor,
    applyMiddleware(doctorRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Doctor/>
    </Provider>,
    document.getElementById('app')
);