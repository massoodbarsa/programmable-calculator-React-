import store from '../store';
// import * as keyCode from '../Components/keyCodes'
import * as MainOperations from './MainOperations'

//handle everything from type in the panel to button result or refine
export function handlePanel() {

  const {keyCode} = store.state

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
  store.setState({
    rec:false
  })
  const {panel,stack} = store.state

  let newPanel = panel
  let newStack = stack

 for (let i = 0; i < newPanel.length; i++) {
    if(Number.isInteger(parseInt(newPanel[i]))){
          newStack.push(newPanel[i]) //add to stack
    }else {
      MainOperations.Operational(newPanel[i])
    }
    newStack=store.state.stack
 }

}
