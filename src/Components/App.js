import React, { Component } from 'react';
import '../Css/App.css';
import store from '../store';
import {Keyset,Screen,Panel,Git} from '.'

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
      <div className='Container'>

        <div className="App">
          <Screen/>
          <Keyset/>
        </div>

        <div className="Panel">
          <Panel/>
        </div>

        <div className="Git">
          <Git/>
        </div>

     </div>
    );
  }
}

export default App;
