import React from 'react'
import PropTypes from 'prop-types'
import '../Css/Rows.css'



export default class Buttons extends React.Component{


  static propTypes = {
    label: PropTypes.string,
    value:PropTypes.string,
  }



  render(){

    const {value,label} = this.props

    return(
      <div className='Rows'>
        <label className='Label' value={value}>
          {label}
        </label>
      </div>
    )
  }

  handlButtonlick(e){
     this.props.onClick(e.target.value)

  }
}
