import store from '../store';


export function Countable(Digit){

  const { value } = {...store.state}
  //console.log(value.x);
  value.x+=Digit.toString()

  store.setState({
    value
  })


}

export function Operational(operator){

  const { value } = {...store.state}
  //console.log(value.x);
  if(operator==="CLR"){
    store.setState({
    value:''
  })
  return
}


}
