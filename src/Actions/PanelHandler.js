import store from '../store';

 export function panelHandle(value){

   const {panel} = store.state
   let newPanel = panel
   if (value==='result') {
      newPanel=value
   }
   if(value==='clean'){
     newPanel=''
   }

   store.setState({

     panel:newPanel
   })

 }
