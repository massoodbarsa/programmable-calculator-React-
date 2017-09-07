import store from '../store';


export function Countable(Digit){

let show=store.state.show
    if (Digit === '.') {
      store.setState({
        show: show === '' ? '0' + String(Digit) : show + Digit
      })
    } else {
      store.setState({
        show: show === '' ? String(Digit) : show + Digit
      })
    }
}




export function Operational(operator) {
  const {value,show,enterMode} = { ...store.state}
  let newValue = [...value]


  if (operator === "CLR") {
    store.setState({
      value: [],
      show: ''
    })
    return
  }


  if (show !== '') {
    newValue.push(Number(show))
  }


  if (newValue.length > 1){

      switch (operator) {
        case '+':
          newValue[newValue.length - 2] = newValue[newValue.length - 2] + newValue[newValue.length - 1]
          newValue.pop()
          break;
        case '-':
          newValue[newValue.length - 2] = newValue[newValue.length - 2] - newValue[newValue.length - 1]
          newValue.pop()
          break;
        case '*':
          newValue[newValue.length - 2] = newValue[newValue.length - 2] * newValue[newValue.length - 1]
          newValue.pop()
          break;
        case '/':
         if(newValue[newValue.length - 1] !== 0){
             newValue[newValue.length - 2] = newValue[newValue.length - 2] / newValue[newValue.length - 1]
          newValue.pop()
        }
          break;
        default:
        break;

      }

    }
    store.setState({
      value: newValue,
      show: ''

    })

    if (newValue.length >= 1) {
      switch (operator) {


        case 'SQRT':
          newValue[newValue.length - 1] = Math.sqrt(newValue[newValue.length - 1])
          break;

        case 'COS':
          newValue[newValue.length - 1] = Math.cos(newValue[newValue.length - 1])
          break;

        case 'SIN':
          newValue[newValue.length - 1] = Math.sin(newValue[newValue.length - 1])
          break;

        case 'LOG':
          newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1])
          break;
        case 'TAN':
          newValue[newValue.length - 1] = Math.tan(newValue[newValue.length - 1])
          break;


        default:
          break;
      }

    }
    store.setState({
      value: newValue,
      show: '',

    })


}
