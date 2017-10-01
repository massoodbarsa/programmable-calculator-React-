import React from 'react'
import '../Css/Github.css'
import store from '../store';



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
   console.log('didi ridi ');
 }

}
