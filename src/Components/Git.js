import React from 'react'
import '../Css/Github.css'
import store from '../store';
import {GitLinks} from '.'


export default class Git extends React.Component{

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render(){

     this.ConnectToApi()

     const {gitlinks} = store.state
     let newGitlinks  = gitlinks

     const links=newGitlinks.map((item,index)=>{
        return (
          <GitLinks
            key={index}
            item={item}
          />
        )
      })

//open and close panel

      const {git}=store.state

      let clas='github-close'
       if(git===true){
          clas='github-open'
       }

      return(
        <div className={`${clas}`}>
            <div className="links">
                   {links}
            </div>
        </div>
      )
  }


 ConnectToApi(){
   const {gitlinks} = store.state
   let newGitlinks = gitlinks

   fetch('https://api.github.com/repos/remarcmij/calculator-programs/contents/programs')
     .then(response => response.json())
     .then(data => data.forEach(index => {
       newGitlinks.push(index)
     }))
  }

}
