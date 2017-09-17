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

  const {programOpen}=store.state
  let clas='panel-close'
   if(programOpen===true){
      clas='panel-open'
   }
    return (
      <div className={`${clas}`}>

          <div className='panel-screen'>
            <textarea
               id='myTextarea'
               placeholder='Enter tour program here' >
            </textarea>
          </div>

          <div className='panel-body'>

            <label>
               <input
                 type='checkbox'
                 value='on'
               />
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
              onClick={()=>PanelHandler.panelHandle()}
              //  onClick={this.handleResult.bind(this)}
            />
          </div>
      </div>
    )
  }
/*
now its add everything to show later we put something
later when i press button de result has to be on show
*/
  //  handleResult() {
  //    const {panel,show} = store.state
  //    var x = document.getElementById("myTextarea").value;
  //    let newShow = Number(x)
  //   panel.push(newShow)
  //    store.setState({
  //      panel,
  //      // shows the format of every line its like : \n34
  //     //  panel:x,
  //      show: newShow.toString()
  //    })
  //  }

  handleClean() {
    document.getElementById("myTextarea").value = '';
    store.setState({
      panel: ''
    })
  }
}

export default Panel;
