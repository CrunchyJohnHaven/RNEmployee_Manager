import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyBJiTJl5hvNRZpYlpd0fX1e4T4zCe58Vbk",
    authDomain: "manager-53083.firebaseapp.com",
    databaseURL: "https://manager-53083.firebaseio.com",
    projectId: "manager-53083",
    storageBucket: "manager-53083.appspot.com",
    messagingSenderId: "375281834658"
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;