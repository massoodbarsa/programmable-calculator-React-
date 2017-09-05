import React from 'react'
import PropTypes from 'prop-types'
import '../Css/Buttons.css'
import * as MainOperations from '../Actions/MainOperations'



export default class CountableButtons extends React.Component{


  static propTypes = {
    label: PropTypes.string,
  }



  render(){

    const {label} = this.props

    return(
      <div className='Buttons'>
        <button className='Button' onClick={()=> MainOperations.Countable(label)} >
          {label}
        </button>
      </div>
    )
  }


}
