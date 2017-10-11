import React from 'react'
import '../Css/DbLinks.css'
import store from '../store';
import FaDownload from 'react-icons/lib/fa/download'
import axios from 'axios'




export default class DbLinks extends React.Component{


  render(){

    return(
      <div>

         <button className ='DbLinks'
             onClick = {this.handelDbLinks.bind(this)}>
             {this.props.item.name}
         </button>
      </div>

    )
  }

  handelDbLinks() {

    document.getElementById("myTextarea").value = this.props.item.program
    document.getElementById("programNameInput").value = this.props.item.name
    document.getElementById("programId").innerHTML = this.props.item._id
  }


}
