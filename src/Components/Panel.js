import React, { Component } from 'react';
import store from '../store';
import '../Css/Panel.css';
import * as PanelHandler from '../Actions/PanelHandler'
import FaDatabase from 'react-icons/lib/fa/database'
import FaEraser from 'react-icons/lib/fa/trash'
import FaTrash from 'react-icons/lib/fa/recycle'
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record'
import MdSave from 'react-icons/lib/md/save'
import axios from 'axios'






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

   let programNameClass='programName-close'
   if(store.state.programName===true){
      programNameClass='programName-open'
   }

    return (
      <div className={`${clas}`}>


         <div className='saveProgramDiv'>
             <MdSave
              className='saveProgram'
              onClick={this.SaveToDB.bind(this)}
             />


         </div>

         <div className={`${programNameClass}`}>
               <div className='programIdDiv' >
                id: <p id="programId"> </p>
               </div>

              <div>
               <label >
                  <span> Name </span>

                  <input
                     id='programNameInput'
                     type='label'
                  />

              </label>
             </div>

         </div>


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


                  <FaDatabase  className='db-button'

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


  //save program in the panel to database as string
  SaveToDB() {
    store.setState({
      programName:true
    })

    var id = document.getElementById("programId").innerHTML
    console.log(id);

    var value = document.getElementById("myTextarea").value.toString()
    //console.log('value is '+value);
     var programName =document.getElementById("programNameInput").value
     console.log(programName);
    store.state.dblinks.map(i=>{

    })


    axios.post('http://localhost:9000/api/program', {
        program: value,
        name: programName
      })
      .then(function(response) {
        console.log(response);

      })
      .catch(function(error) {
        console.log(error);
      });
  }

}

export default Panel;
