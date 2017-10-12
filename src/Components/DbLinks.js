import React from 'react'
import '../Css/DbLinks.css'
import store from '../store';
import FaDownload from 'react-icons/lib/fa/download'
import TiBackspace from 'react-icons/lib/ti/backspace'
import axios from 'axios'




export default class DbLinks extends React.Component{


  render(){

    return(
      <div className ='dbButtons'>

         <button className ='DbLinks' id='dbLinkButton'
             onClick = {this.handelDbLinks.bind(this)}>
             {this.props.item.name}
         </button>

         <TiBackspace className ='deleteButton'
            onClick = {this.handleDelete.bind(this)}
          />

      </div>

    )
  }

  handelDbLinks() {

    document.getElementById("myTextarea").value = this.props.item.program
    document.getElementById("programNameInput").value = this.props.item.name
    document.getElementById("programId").innerHTML = this.props.item._id
  }


  handleDelete(e){
    // e.preventDefault()
    this.props.onDelete(this.props.index,this.props.item._id)

   }


}
