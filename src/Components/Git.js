import React from 'react'
import '../Css/Github.css'
import store from '../store';
import {GitLinks,DbLinks} from '.'
import FaDownload from 'react-icons/lib/fa/download'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import axios from 'axios'



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


     const {gitlinks,dblinks} = store.state
     const newGitlinks  = gitlinks
     const newDblinks  = dblinks

     const gitLinks=store.state.gitlinks.map((item,index)=>{
        return (
          <GitLinks
            key={index}
            item={item}
          />
        )

      })
      const dbLinks=store.state.dblinks.map((item,index)=>{
         return (
           <DbLinks
             key={index}
             item={item}
           />
         )

       })


//open and close panel

      const {git,databaseBackImage}=store.state

      let clas='db-close'
       if(git===true){
          clas='db-open'
       }
      let clas2='gitBackImage'
      if (databaseBackImage===true) {
        clas2='databaseBackImage'
      }



      return(

        <div className={`${clas} ${clas2}`} >
            <div className='LoadApi'>
                <FaDownload
                  className='LoadApiKey'
                  onClick={this.loadDatabase.bind(this)}
                />

                <GoMarkGithub
                 className='LoadGitButton'
                 onClick={this.LoadGitApi.bind(this)}
                />
            </div>

            <div className="gitlinks">
                   {gitLinks}
            </div>
            <div className="dblinks">
                   {dbLinks}
            </div>
        </div>
      )
  }

  LoadGitApi(){
    store.setState({
      gitlinks:[],
      dblinks:[]
    })
    const {gitlinks} = store.state
    let newGitlinks = gitlinks

    fetch('https://api.github.com/repos/remarcmij/calculator-programs/contents/programs')
      .then(response => response.json())
      .then(data => data.forEach(index => {

        newGitlinks.push(index)

        store.setState({
          gitlinks:newGitlinks
        })

      }))

      store.setState({
        databaseBackImage:false
      })

   }



   loadDatabase(){
     const {dblinks} = store.state
     const newDblinks  = dblinks

     store.setState({
       gitlinks:[],
       dblinks:[]
     })

    axios.get('http://localhost:9000/api/program')
    .then(function (response) {
      response.data.forEach(i=>{

        newDblinks.push(i)

        store.setState({
          dblinks:newDblinks
        })
      })
    })
    .catch(function (error) {
      console.log(error);

    })


   store.setState({
     databaseBackImage:true
   })

//   axios.put('http://localhost:9000/api/program/59db67217a63805a6cc49ecc', {
//       program:'menyuch'
// })
// .then(function (response) {
//  console.log(response);
// })
// .catch(function (error) {
//  console.log(error);
// });

//   axios.delete('http://localhost:9000/api/program/59db67217a63805a6cc49ecc')
// .then(function (response) {
// })
// .catch(function (error) {
//  console.log(error);
// });



    }
}
