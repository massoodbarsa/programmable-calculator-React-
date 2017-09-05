import React, { Component } from 'react';
import store from '../store';
import {Rows} from '.'
import '../Css/Screen.css';


class Screen extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
  render() {
    const {value} = {...store.state}


    return (
      <div className="Screen">
          <Rows
          //  value={value}
            label={value.t}
          />
          <Rows
            //value={value}
            label={value.z}
          />
          <Rows
          //  value={value}
            label={value.y}
          />
          <Rows
        //    value={value}
            label= {value.x}
          />
      </div>
    );
  }


}

export default Screen;
