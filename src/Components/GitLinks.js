import React from 'react'
import '../Css/GitLinks.css'
import store from '../store';


export default class GitLinks extends React.Component{


  render(){

    return(
      <div>
         <button className ='GitLinks'
             onClick = {this.handelGitApiLinks.bind(this)}>
             {this.props.item.name}
         </button>
      </div>

    )
  }

  handelGitApiLinks() {

    console.log(this.props.item.download_url);
    let xmlhttp = null;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById("myTextarea").value = xmlhttp.responseText
      }
    }
    xmlhttp.open("GET", this.props.item.download_url, false);
    xmlhttp.send();
  }

}
