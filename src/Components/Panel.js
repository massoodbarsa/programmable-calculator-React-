import React, { Component } from 'react';
import store from '../store';
import '../Css/Panel.css';
import * as PanelHandler from '../Actions/PanelHandler'



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

            <input
               className='result-button'
               type='button'
               value='Result'
               onClick={()=>PanelHandler.panelHandle()}
            />
          
          </div>
      </div>
    )
  }


}

export default Panel;
