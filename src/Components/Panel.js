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
                       className={`${recClassName}`}
                       type='button'
                       value='Rec'
                       onClick={this.handleRec.bind(this)}
                     />
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

  handleClean() {
    document.getElementById("myTextarea").value = '';
    store.setState({
      panel:[]
    })
  }
}

export default Panel;
