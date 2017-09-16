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

   const {panel} = store.state
   //console.log(panel);

    return (
      <div className='panel'>
          <div className='panel-screen'>
            <textarea placeholder='Enter tour program here'>
                {panel}
            </textarea>

            <label className='hamuju' >
              {panel}

            </label>

          </div>

          <div className='panel-body'>

            <label>
               <input type='checkbox' value='on'/>
               <span>Slow</span>
            </label>
            <input

               className='clean-button'
               type='button'
               value='Clean'
               onClick={()=>PanelHandler.panelHandle('clean')}

            />

            <input
               className='result-button'
               type='button'
               value='Result'
               onClick={()=>PanelHandler.panelHandle('result')}
            />

          </div>
      </div>
    )
  }


}

export default Panel;
