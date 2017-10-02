import React, { Component } from 'react';
import store from '../store';
import '../Css/Panel.css';
import * as PanelHandler from '../Actions/PanelHandler'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import FaEraser from 'react-icons/lib/fa/trash'
import FaTrash from 'react-icons/lib/fa/recycle'
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record'




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
//open and close panel
  let clas='panel-close'
   if(programOpen===true){
      clas='panel-open'
   }
//change the color of rec button when on and off
   let recClassName='rec-off'
   if(store.state.rec===true){
      recClassName='rec-on'
   }

    return (
      <div className={`${clas}`}>

          <div className='panel-screen'>
            <textarea
               id='myTextarea'
               placeholder='Enter your program here'
               required
               autoFocus

            >
            </textarea>
          </div>

          <div className='panel-body'>

              <div className='small-keys'>


                  <GoMarkGithub  className='git-button'

                     onClick={this.handleGitButton.bind(this)}
                  />

                  <MdFiberManualRecord  className={`${recClassName}`}

                     onClick={this.handleRec.bind(this)}
                  />


              </div>

            <FaTrash  className='refine-button'
               onClick={()=>PanelHandler.refinePanel()}
            />

            <FaEraser  className='clean-button'
            onClick={this.handleClear.bind(this)}
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
    if (store.state.rec===false) {
      store.setState({
        rec:true
      })
    }else {
      store.setState({
        rec:false
      })
    }
  }
//clear the panel
  handleClear() {
    document.getElementById("myTextarea").value = '';
    store.setState({
      panel:[]
    })
  }


//open git panel
  handleGitButton(){

      if (store.state.git) {
        store.setState({
          git:false
        })
      } else {
        store.setState({
          git:true
        })
      }

   }

}

export default Panel;
