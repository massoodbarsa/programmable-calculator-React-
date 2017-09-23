import store from '../store';
import Panel from '../Components/Panel'
import * as keyCode from '../Components/keyCodes'
import * as MainOperations from './MainOperations'

//handle everythin from type in the panel to button result or refine
export function handlePanel() {

  const {
    panel,
    keyCode
  } = store.state

  let x = document.getElementById("myTextarea").value.toLowerCase();
  let newPanel = []
  let newKeyCode = keyCode

  //make an array of panel inputs en \n of every new line
  let arr = x.split('\n')

  //make an array of panel members which belongs to keyCode or are numbers
  arr.map(index => {
    if (Number.isInteger(parseInt(index))) { //if number push
      newPanel.push(index.toString())
    } else { //not a number then see if it belongs to panel
      for (let i = 0; i < newKeyCode.length; i++) {
        if (newKeyCode[i] === index) {
          newPanel.push(index)
        }
      }
    }
  })
  console.log(newPanel);
  //panel calculation

  store.setState({
    panel: newPanel
  })
}

//click on refine button to refine the panel
export function refinePanel() {
  handlePanel()
  const {
    panel
  } = store.state
  let newPanel = panel
  document.getElementById("myTextarea").value = ''
  newPanel.map(index => {
    document.getElementById("myTextarea").value += '\n' + index + '\n';
  })

}

//handle button 'Result'
export function handleResult() {

  handlePanel()

  const {panel,show,stack,rec} = store.state

  let newPanel = panel
  let newStack = stack
  let newShow  = show



  newPanel.map(index => {
//if panel is number
    if (Number.isInteger(parseInt(index))) {
      newStack.push(index) //add to stack

      if(stack.length>3){
        newStack.pop()

        store.setState({
          stack:newStack,
        })
      }
    }else{ //call operational function
  
      index=index.toString()
      MainOperations.Operational(index)
      if(stack.length-1 >=2){//if 3 digit do operator*2
        MainOperations.Operational(index)
        console.log(index);

      }


    }

  })

  // store.setState({
  //   stack
  // })
}
