import React, { Component } from 'react';
import store from '../store';
import '../Css/Panel.css';


class Panel extends Component {

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
      <div className='panel'>
          <div className='panel-screen'>
            <textarea>
                Enter your program here
            </textarea>
          </div>
          <div className='panel-body'>
            <label>
              <input type='checkbox' value='on'/>
               <span>Slow</span>
            </label>
            <button>Result</button>
          </div>
      </div>
    )
  }


}

export default Panel;
