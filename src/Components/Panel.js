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

  const {programOpen,rec}=store.state

  let clas='panel-close'
   if(programOpen===true){
      clas='panel-open'
   }

    return (
      <div className={`${clas}`}>

          <div className='panel-screen'>
            <textarea
               id='myTextarea'
               placeholder='Enter tour program here'
               required
               autoFocus
            >
            </textarea>
          </div>

          <div className='panel-body'>

              <div className='checkbox'>
                  <label>
                     <input
                       type='checkbox'
                       unchecked
                     />
                     <span>Slow</span>
                  </label>

                  <label>
                     <input
                       id='rec'
                       type='checkbox'
                       ref='rec'
                       unchecked
                       onClick={this.handleRec.bind(this)}
                     />
                     <span>Rec</span>
                  </label>
              </div>


            <input
               className='refine-button'
               type='button'
               value='Refine'
               onClick={()=>PanelHandler.refinePanel()}
            />

            <input
               className='clean-button'
               type='button'
               value='Clear'
              //  onClick={()=>PanelHandler.panelHandle('clean')}
              onClick={this.handleClean.bind(this)}
            />

            <input
               className='result-button'
               type='button'
               value='Result'
              onClick={()=>PanelHandler.handleResult()}
            />
          </div>
      </div>
    )
  }

  handleRec(){
    if(this.refs.rec.checked===true){
      store.setState({
        rec:true
      })
    }else {
      store.setState({
        rec:false
      })
    }

    // if(rec===true){
    //   console.log('rushan shod');
    //
    //   document.getElementById("rec").checked= true;
    // }
    // else{
    //   document.getElementById("rec").checked= false;
    //   console.log('khamush shod');
    //
    //
    // }
  }

  handleClean() {
    document.getElementById("myTextarea").value = '';
    store.setState({
      panel:[]
    })
  }
}

export default Panel;
