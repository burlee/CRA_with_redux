import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import ReduxComponent from './ReduxComponent/ReduxComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <p>Hello</p>
          <ReduxComponent/>
        </React.Fragment>
      </Provider>
    );
  }
}



export default App;
