import store from '../store';


export function Countable(Digit){

let show=store.state.show

    if (Digit==='3.14') {
      if(show!=='')
      return
    }
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
  const {value,show,enterMode,str} = store.state
  let newValue = [...value]

  if (operator === "CLR") {
    store.setState({
      value: [],
      show: ''
    })
    return
  }

  if (operator === "CLX") {
    store.setState({
      show: ''
    })
    return
  }


  if(operator==='STO'){
    let str=newValue[0]
    store.setState({
      str
    })
  }


  if(operator==='RCL'){
    newValue.push(Number(str))
    store.setState({
      value:newValue
    })
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

        case 'XY':
          newValue[newValue.length - 2] = Math.pow(newValue[newValue.length - 2], newValue[newValue.length - 1]);
          newValue.pop()
          break;

        case 'R':

          break;

        default:
        break;

      }

    }
    // store.setState({
    //   value: newValue,
    //   show: ''
    //
    // })

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

        case 'LN':
          newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1])
          break;

        case 'TAN':
          newValue[newValue.length - 1] = Math.tan(newValue[newValue.length - 1])
          break;

        case '1/x':
          newValue[newValue.length - 1] = 1/newValue[newValue.length - 1]
          break;

        case 'LOG':
          newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1])/Math.LN10
          break;

        case 'EXP':
          newValue[newValue.length - 1] = Math.exp(newValue[newValue.length - 1])
          break;

        case 'CHS':
          newValue[newValue.length - 1] = -(newValue[newValue.length - 1])
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
