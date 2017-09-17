import store from '../store';

 export function panelHandle(){

     const {panel,show} = store.state
     var x = document.getElementById("myTextarea").value;
     let newShow = Number(x)
     panel.push(newShow.toString())
     //use replace() to drop \n if there is one
    //  let newpanel=panel.forEach(index=>{
    //    return index
    //  })
    //  console.log(newpanel);

     store.setState({
       panel,
       // shows the format of every line its like : \n34
      //  panel:x,
       show: newShow.toString()
     })
   }
