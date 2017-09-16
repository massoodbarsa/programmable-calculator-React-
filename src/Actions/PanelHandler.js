import store from '../store';

 export function panelHandle(){

     const {panel,show} = store.state
     var x = document.getElementById("myTextarea").value;
     let newShow = Number(x)
     panel.push(newShow)
     console.log(panel);
     //use replace() to drop \n if there is one

     store.setState({
       panel,
       // shows the format of every line its like : \n34
      //  panel:x,
       show: newShow.toString()
     })
   }
