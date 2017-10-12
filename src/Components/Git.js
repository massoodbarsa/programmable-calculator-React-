import React from 'react'
import '../Css/Github.css'
import store from '../store';
import {GitLinks,DbLinks} from '.'
import FaDatabase from 'react-icons/lib/fa/database'
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
             index={index}
             item={item}
             onDelete={this.handleDelete.bind(this)}

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
                <FaDatabase
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
    document.getElementById("programId").innerHTML = ''

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



  loadDatabase() {

    store.setState({
      gitlinks: [],
      dblinks: []
    })

    const {
      dblinks
    } = store.state
    const newDblinks = dblinks

    axios.get('http://localhost:9000/api/program')
      .then(function(response) {
        response.data.forEach(i => {

          newDblinks.push(i)

          store.setState({
            dblinks: newDblinks
          })
        })
      })
      .catch(function(error) {
        console.log(error);

      })

    store.setState({
      databaseBackImage: true
    })

  }

    handleDelete = (index, id) => {

    const newDblinks = [...store.state.dblinks]

    newDblinks.splice(index, 1)

    store.setState({
      dblinks: newDblinks
    })

    axios.delete('http://localhost:9000/api/program/' + id)
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
  }
}
