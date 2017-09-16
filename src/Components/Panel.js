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

   const {panel,show} = store.state
   //console.log(panel);

    return (
      <div className='panel'>

          <div className='panel-screen'>
            <textarea
               id='myTextarea'
               placeholder='Enter tour program here' >
            </textarea>
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
              //  onClick={()=>PanelHandler.panelHandle('clean')}
              onClick={this.handleClean.bind(this)}
            />

            <input
               className='result-button'
               type='button'
               value='Result'
               //  onClick={()=>PanelHandler.panelHandle('result')}
               onClick={this.handleResult.bind(this)}
            />
          </div>
      </div>
    )
  }

   handleResult() {
      var x = document.getElementById("myTextarea").value;
      let newShow=Number(x)

      store.setState({
        panel:x,
        show:newShow.toString()
      })
  }

  handleClean() {
    // var x = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value='' ;
     store.setState({
       panel:''
     })
 }
}

export default Panel;
