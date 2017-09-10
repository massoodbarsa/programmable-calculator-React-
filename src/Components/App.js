import React, { Component } from 'react';
import '../Css/App.css';
import store from '../store';
import {Keyset,Screen} from '.'
class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
  render() {
    return (
      <div className="App">
        <Screen/>
        <Keyset/>
      </div>
    );
  }
}

export default App;
