import React from 'react'
import PropTypes from 'prop-types'
import '../Css/Buttons.css'
import * as MainOperations from '../Actions/MainOperations'



export default class OperationalButtons extends React.Component{


  static propTypes = {
    label: PropTypes.string,
    value:PropTypes.string
  }



  render(){

    const {label,value} = this.props

    return(
      <div className='Buttons'>
        <button className='Button' onClick={()=> MainOperations.Operational(value)} >
          {label}
        </button>
      </div>
    )
  }


}
