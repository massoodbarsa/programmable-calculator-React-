import React from 'react'
import '../Css/Github.css'
import store from '../store';
import {GitLinks} from '.'
import FaDownload from 'react-icons/lib/fa/download'



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


     const {gitlinks} = store.state
     let newGitlinks  = gitlinks

     const links=store.state.gitlinks.map((item,index)=>{
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
            <div className='LoadApi'>
                <FaDownload
                  className='LoadApiKey'
                  onClick={this.LoadApi.bind(this)}
                />
            </div>

            <div className="links">
                   {links}
            </div>
        </div>
      )
  }

  LoadApi(){
    const {gitlinks} = store.state
    let newGitlinks = gitlinks

    fetch('https://api.github.com/repos/remarcmij/calculator-programs/contents/programs')
      .then(response => response.json())
      .then(data => data.forEach(index => {
        newGitlinks.push(index)
      }))

      store.setState({
        gitlinks:newGitlinks
      })
   }
}
