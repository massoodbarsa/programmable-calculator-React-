import React from 'react'
import PropTypes from 'prop-types'
import '../Css/Rows.css'



export default class Buttons extends React.Component{


  static propTypes = {
    row: PropTypes.number,
    value:PropTypes.number,
  }



  render(){

    const {value,row} = this.props

    return(
      <div className='Rows'>
        <label className='Row' value={value}>
          {row}
        </label>
      </div>
    )
  }
}
