import React from 'react'
import '../Css/GitLinks.css'
import store from '../store';
import {panel} from '.'



export default class GitLinks extends React.Component{

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render(){

    return(
      <div>

         <button className ='GitLinks'

           onClick = {this.handelGitLinks.bind(this)}>
           {this.props.item.name}

         </button>

      </div>

    )
  }

 handelGitLinks(){

   console.log(this.props.item.download_url);
   let xmlhttp = null;


          //  if (window.XMLHttpRequest)
          //  {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
               xmlhttp=new XMLHttpRequest();
          //  }
          //  else
          //  {// code for IE6, IE5
          //      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          //  }
           xmlhttp.onreadystatechange=function()
           {
               if (xmlhttp.readyState==4 && xmlhttp.status==200)
               {

                  document.getElementById("myTextarea").value=xmlhttp.responseText
               }
           }
           xmlhttp.open("GET", this.props.item.download_url, false);
           xmlhttp.send();
 }

}
