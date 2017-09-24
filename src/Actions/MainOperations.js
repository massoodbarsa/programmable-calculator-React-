import store from '../store';
import degrees from 'radians-degrees';
import radians from 'degrees-radians';
import Panel from '../Components/Panel'

import * as keyCode from '../Components/keyCodes'



export function Countable(Digit){

  const {show,rec,panel} = store.state
  let newShow = show
  let newPanel=panel



      switch (Digit) {
    case keyCode.D0:
    case keyCode.D1:
    case keyCode.D2:
    case keyCode.D3:
    case keyCode.D4:
    case keyCode.D5:
    case keyCode.D6:
    case keyCode.D7:
    case keyCode.D8:
    case keyCode.D9:
    case keyCode.DOT:
    case keyCode.PI:


      if (Digit === '.') {
        if (show.includes('.')) {
          return
        }
      }


      if (newShow.includes('e')) {
        newShow = newShow.replace('0', '')
        newShow += Digit
      } else {
        newShow = show === '' ? String(Digit) : show + Digit
      }

/////////

      store.setState({
        show: newShow
      })


  }
}



export function Operational(operator) {
  const {stack,show,str,arc,panel,rec } = store.state
  let newstack = [...stack]
  let newShow = show
  let newStr=str
  let newPanel=[...panel]
// click result push operator again and again to panel ...error
  if (rec) {
    if (operator === keyCode.ENTER ) {
      newPanel.push(newShow)
    }else if ( operator === keyCode.CLR) {
      
    }
    else{
      newPanel.push(newShow)
      newPanel.push(operator)
    }
    newPanel.map(index => {
      document.getElementById("myTextarea").value +='\n'+ index +'\n';
    //  newPanel=store.state.panel
    })

 }

 // if (rec) {
 //
 // }



  if(operator===keyCode.PI){
   newShow=Math.PI
  }


  if (newShow !== '') {
//any click add the newShow to the stack
    newstack.push(newShow)
    newShow = ''
//fix it later
//do not allow the length of stack exceeds 3
    if (newstack.length > 3) {
      newstack.pop(newstack[3])
    }

    if (show == '.') {
//any click do not allows '.' in stack
      newstack[0] = 0

    }
  }

  ///////EEX

  if (operator === keyCode.EEX) {
    let changable = "0"
//to prevent add an exponent to the
//priviuos  by clicking on eex again
    if (show.includes("e")||show.length>=3) {
      return
    }

    if (show === ''){
      newShow="1" + 'e' + '+' + changable
      store.setState({
        show: newShow
      })
    } else {
      newShow=show + 'e' + '+' + changable
      store.setState({
        show: newShow
      })
    }

    if (show === '.') {
      store.setState({
        show: ''
      })
    }
    return
  }


  if (newstack.length > 1) {

    switch (operator) {
      case keyCode.ADD:
        newstack[newstack.length - 2] = Number(newstack[newstack.length - 2] )+ Number(newstack[newstack.length - 1])
        newstack.pop()
        break;

      case keyCode.SUB:

        newstack[newstack.length - 2] = newstack[newstack.length - 2] - newstack[newstack.length - 1]
        newstack.pop()
        break;

      case keyCode.MUL:
        newstack[newstack.length - 2] = newstack[newstack.length - 2] * newstack[newstack.length - 1]
        newstack.pop()
        break;

      case keyCode.DIV:
        if (Number(newstack[newstack.length - 1]) !== 0) {
          newstack[newstack.length - 2] = newstack[newstack.length - 2] / newstack[newstack.length - 1]
          newstack.pop()
        }
        break;

      case keyCode.POW:
        newstack[newstack.length - 2] = Math.pow(newstack[newstack.length - 2], newstack[newstack.length - 1]);
        newstack.pop()
        break;

      case keyCode.ROLL_DOWN:
        const [a, b, c] = store.state.stack
        newstack = [c, a, b]
        break;

      default:
        break;
    }
  }

  if (newstack.length >= 1) {
    if (arc === false) {
      switch (operator) {


        case keyCode.SQRT:
          newstack[newstack.length - 1] = Math.sqrt(newstack[newstack.length - 1])
          break;

        case keyCode.COS:
          newstack[newstack.length - 1] = Math.cos(radians(Number(newstack[newstack.length - 1])))
          break;

        case keyCode.SIN:
          newstack[newstack.length - 1] = Math.sin(radians(Number(newstack[newstack.length - 1])))
          break;

        case keyCode.LN:
          newstack[newstack.length - 1] = Math.log(newstack[newstack.length - 1])
          break;

        case keyCode.TAN:
          newstack[newstack.length - 1] = Math.tan(radians(Number(newstack[newstack.length - 1])))
          break;

        case keyCode.RECIPROCAL:
          newstack[newstack.length - 1] = 1 / newstack[newstack.length - 1]
          break;

        case keyCode.LOG:
          newstack[newstack.length - 1] = Math.log(newstack[newstack.length - 1]) / Math.LN10
          break;

        case keyCode.EXP:
          newstack[newstack.length - 1] = Math.exp(newstack[newstack.length - 1])
          break;

        case keyCode.SWAP:
          const [x, y, ...rest] = store.state.stack
          newstack = [y, x, ...rest]
          break;

        case keyCode.STO:
          newStr=newstack[0]
          break;

        case keyCode.RCL:
          newstack.push(str)
          break;

        case keyCode.CLX:
          if (newstack.length>=1&&show==='') {
            return
          }
          newstack.pop()
          newShow = ''
          break;

        case keyCode.CLR:
          newstack = []
          newShow = ''
          break;

        case keyCode.CHS:
          let plusIndex = show.indexOf('+')
          let minIndex = show.indexOf('-')
        if (show.includes('e')) {
            if (show.includes('+')) {
              newShow = show.replace(show.charAt(plusIndex), '-');
            } else if (show.includes('-')) {
              newShow = show.replace(show.charAt(minIndex), '+');
              newstack[newstack.length - 1] = -(newstack[newstack.length - 1])
            }
          newstack.pop()
        }
        else {
           newstack[newstack.length - 1] = -(newstack[newstack.length - 1])
        }
          break;


        case keyCode.ENTER:
          if(show.includes('e')){
            newstack[0]=Number(newstack[0])
            newShow = newstack[0].toString()
          }
          break;


        case keyCode.ARC:
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

        case keyCode.COS:
          newstack[newstack.length - 1] = degrees(Math.acos(newstack[newstack.length - 1]))
          newShow = ''
          break;

        case keyCode.SIN:
          newstack[newstack.length - 1] = degrees(Math.asin(newstack[newstack.length - 1]))
          break;

        case keyCode.TAN:
          newstack[newstack.length - 1] = degrees(Math.atan(newstack[newstack.length - 1]))
          break;

        case keyCode.ARC:
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
    stack: newstack,
    show: newShow,
    str: newStr
  })

  }
