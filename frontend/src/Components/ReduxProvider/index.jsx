import React from 'react';
import { Provider } from 'react-redux';
import store from '../../Store';
import App from '../../Containers/App';


const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default ReduxProvider;
