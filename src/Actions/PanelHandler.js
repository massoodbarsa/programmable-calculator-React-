import store from '../store';
import Panel from '../Components/Panel'
// import * as keyCode from '../Components/keyCodes'


export function handlePanel() {

  const {
    panel,
    show,
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
    } else { //not number then see if it belongs to panel
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
