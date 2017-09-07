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
    const {value,show} = {...store.state}


    return (
      <div className="Screen">
          <Rows
          //  value={value}
            row={value[value.length-3]}
          />
          <Rows
            //value={value}
            row={value[value.length-2]}
          />
          <Rows
          //  value={value}
            row={value[value.length-1]}
          />
          <Rows
              row= {show}
          />
      </div>
    );
  }


}

export default Screen;
