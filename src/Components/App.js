import React, { Component } from 'react';
import '../Css/App.css';
import store from '../store';
import {Keyset,Screen,Panel,Git} from '.'
import axios from 'axios'


class App extends Component {




  componentWillMount() {
    const {dbLinkBank} = store.state
    const newDbLinkBank = dbLinkBank

    this.subscription = store.subscribe(state => {
      this.setState(state)
    })

    axios.get('http://localhost:9000/api/program')
    .then(function (response) {
      response.data.forEach(i=>{

        newDbLinkBank.push(i.name)

        store.setState({
          dbLinkBank:newDbLinkBank
        })
      })
    })
    .catch(function (error) {
      console.log(error);

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
