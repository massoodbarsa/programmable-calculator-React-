import React from 'react'
import '../Css/Rows.css'


export default class Buttons extends React.Component{

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
