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
    const {value,show,arc} = {...store.state}
    let clas='no-arc'
    
    if(arc){
       clas='arc'
    }

    return (
      <div className="Screen">

           <h3 className={`${clas}`} >Arc</h3>
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
