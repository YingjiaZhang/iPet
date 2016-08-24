/**
 * Created by zhangyiru on 16-8-17.
 */
import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import UserMsgBoardApp from './components/user_board/UserMsgBoardApp';
import resultList from './reducers';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import userRequestMiddleware from './middlewares/userRequestMiddleware';

const store = createStore(
    resultList,
    applyMiddleware(userRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <UserMsgBoardApp/>
    </Provider>,
    document.getElementById('app')
);