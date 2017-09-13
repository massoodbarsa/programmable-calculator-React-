import store from '../store';
import degrees from 'radians-degrees';
import radians from 'degrees-radians';




export function Countable(Digit){

    let show=store.state.show


    if (Digit==='3.141592653589793') {
      if(show!=='')
      return
    }
    if (Digit === '.'){
      if (show.includes('.')) {
        return
      }
      store.setState({
        show: show === '' ? '0' + String(Digit) : show + Digit
      })
    }
    if (show.includes('e')) {

       let plusIndex=show.indexOf('+')
       let minIndex=show.indexOf('-')
          if (show.includes('+')) {
            show = show.replace(show.charAt(plusIndex+1), Number('0'));
          }else if (show.includes('-')) {
            show = show.replace(show.charAt(minIndex+1), Number('0'));

          }

      store.setState({
        show:show+Digit
      })

    }
    else {
      store.setState({
        show: show === '' ? String(Digit) : show + Digit
      })
    }
}




export function Operational(operator) {
  const {value,show,enterMode,str,arc } = store.state
  let newValue = [...value]
  let newShow = show

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
  ///////EEX


  if (operator === "EEX") {

    let changable = 0

    if (show.includes("e")) {
      return
    }

    if (show === '') {
      store.setState({
        show: 1 + 'e' + '+' + changable
      })
    } else {
      store.setState({
        show: show + 'e' + '+' + changable
      })
    }

    if (operator === 'ENTER') {
      console.log('adede');
    }
    return
  }

  ////
  if (operator === 'STO') {
    let str = newValue[0]
    store.setState({
      str
    })
  }


  if (operator === 'RCL') {
    newValue.push(Number(str))
    store.setState({
      value: newValue
    })
  }

  if (operator === 'R') {
    const [x, y, z] = store.state.value
    newValue = [z, x, y]
    store.setState({
      value: newValue
    })
  }


  if (show !== '') {
    newValue.push(Number(show))
    if (newValue.length > 4)
      return
  }

  if (operator === 'xy') {
    const [x, y, ...rest] = store.state.value
    newValue = [y, x, ...rest]
    store.setState({
      value: newValue
    })
  }


  if (newValue.length > 1) {

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
        if (newValue[newValue.length - 1] !== 0) {
          newValue[newValue.length - 2] = newValue[newValue.length - 2] / newValue[newValue.length - 1]
          newValue.pop()
        }
        break;

      case 'XY':
        newValue[newValue.length - 2] = Math.pow(newValue[newValue.length - 2], newValue[newValue.length - 1]);
        newValue.pop()
        break;

      default:
        break;
    }
  }

  if (newValue.length >= 1) {
    if (arc === false) {
      switch (operator) {


        case 'SQRT':
          newValue[newValue.length - 1] = Math.sqrt(newValue[newValue.length - 1])
          break;

        case 'COS':
          newValue[newValue.length - 1] = Math.cos(radians(newValue[newValue.length - 1]))
          break;

        case 'SIN':
          newValue[newValue.length - 1] = Math.sin(radians(newValue[newValue.length - 1]))
          break;

        case 'LN':
          newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1])
          break;

        case 'TAN':
          newValue[newValue.length - 1] = Math.tan(radians(newValue[newValue.length - 1]))
          break;

        case '1/x':
          newValue[newValue.length - 1] = 1 / newValue[newValue.length - 1]
          break;

        case 'LOG':
          newValue[newValue.length - 1] = Math.log(newValue[newValue.length - 1]) / Math.LN10
          break;

        case 'EXP':
          newValue[newValue.length - 1] = Math.exp(newValue[newValue.length - 1])
          break;

        case 'ARC':
          let arc = true
          store.setState({
            arc
          })
          break;

        default:
          break;
      }

    }

    if (arc === true) {

      switch (operator) {

        case 'COS':
          newValue[newValue.length - 1] = degrees(Math.acos(newValue[newValue.length - 1]))
          console.log('arc is cos');
          break;

        case 'SIN':
          newValue[newValue.length - 1] = degrees(Math.asin(newValue[newValue.length - 1]))
          break;

        case 'TAN':
          newValue[newValue.length - 1] = degrees(Math.atan(newValue[newValue.length - 1]))
          break;

        case 'ARC':
          let arc = false
          store.setState({
            arc
          })
          break;

        default:
          break;
      }
      store.setState({
        arc: false
      })
    }

  }
  store.setState({
    value: newValue,
    show: '',
  })


  if (operator === 'CHS') {

    let plusIndex = show.indexOf('+')
    let minIndex = show.indexOf('-')

    if (show.includes('+')) {
      newShow = show.replace(show.charAt(plusIndex), '-');
      store.setState({
        value: '',
        show: newShow
      })

    } else if (show.includes('-')) {
      newShow = show.replace(show.charAt(minIndex), '+');
      store.setState({
        value: '',
        show: newShow
      })

    }
    newValue[newValue.length - 1] = -(newValue[newValue.length - 1])

  }

}
