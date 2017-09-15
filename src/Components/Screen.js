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
    const {stack,show,arc} = {...store.state}
    let clas='no-arc'

    if(arc){
       clas='arc'
    }

    return (
      <div className="Screen">

           <h3 className={`${clas}`} >Arc</h3>
          <Rows
          //  stack={value}
            row={stack[stack.length-3]}
          />
          <Rows
            //stack={stack}
            row={stack[stack.length-2]}
          />
          <Rows
          //  stack={stack}
            row={stack[stack.length-1]}
          />
          <Rows
              row= {show}
          />
      </div>
    );
  }


}

export default Screen;
