import React, { Component } from 'react';
import store from '../store';
import {Rows} from '.'
import '../Css/Screen.css';
import FaFolderOpenO from 'react-icons/lib/fa/folder-open'



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
           <div className='screen-key'>
               <h3 className={`${clas}`} >Arc</h3>

               <FaFolderOpenO className='open-panel'
                 onClick={this.handleProgramPanel.bind(this)}
                 value='Open Panel'

               />

           </div>
          <Rows
            row={stack[stack.length-3]}
          />
          <Rows
            row={stack[stack.length-2]}
          />
          <Rows
            row={stack[stack.length-1]}
          />
          <Rows
              row= {show}
          />
      </div>
    );
  }
  handleProgramPanel(){
    if (store.state.programOpen) {
      store.setState({
        programOpen:false,
        git:false
      })
    } else {
      store.setState({
        programOpen:true
      })
    }

  }

}

export default Screen;
