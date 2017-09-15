import store from '../store';
import degrees from 'radians-degrees';
import radians from 'degrees-radians';




export function Countable(Digit){

  const {show} = store.state
  let newShow = show

    if (Digit==='3.141592653589793') {
      if(show!=='')
      return
    }


    if (Digit === '.') {
      if (show.includes('.')) {
        return
      }
      newShow = show === '' ? '0' + String(Digit) : show + Digit
    }


    if (show.includes('e')) {

    let plusIndex = show.indexOf('+')
    let minIndex = show.indexOf('-')

    if (show.includes('+')) {
      newShow = show.replace(show.charAt(plusIndex + 1), '') + Digit;
    } else if (show.includes('-')) {
      newShow = show.replace(show.charAt(minIndex + 1), '') + Digit;
    }

  } else {
    newShow = show === '' ? String(Digit) : show + Digit

  }

   store.setState({
    show:newShow
    })
}




export function Operational(operator) {
  // console.log(operator);
  const {stack,show,enterMode,str,arc } = store.state
  let newstack = [...stack]
  let newShow = show
  let newStr=str

  if (show !== '') {
    newstack.push(Number(show))
    newShow=''
  //fix it later
    if(newstack.length>3){
      newstack.pop(newstack[3])
    }

    if (show==='.') {
      newstack[0]=0
    }
  }

   if (newstack[0]===NaN) {
     newstack[0]=Error('This is wrong')
   }

  // if(show.includes('e')){
  //   newShow=''
  //
  //
  //    // store.setState({
  //   //   show: newstack
  //   // })
  // }


  // if (operator === "CLR") {
  //   store.setState({
  //     stack: [],
  //     show: ''
  //   })
  //   return
  // }
//clean the show stack
  // if (operator === "CLX") {
  //   newShow=''
  //   store.setState({
  //     show: ''
  //   })
  //   return
  // }


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

    if(show==='.'){
      newShow = ''

    }

    return
  }

  ////store de number
  // if (operator === 'STO') {
  //    newStr = newstack[0]
  // }

////recall the stored number
  // if (operator === 'RCL') {
  //   newstack.push(Number(str))
  //
  // }

  // if (operator === 'R') {
  //   const [x,y,z] = store.state.stack
  //   newstack = [z,x,y]
  //   store.setState({
  //     stack: newstack
  //   })
  // }


  // if (operator === 'xy') {
  //   const [x,y,...rest] = store.state.stack
  //   newstack = [y,x,...rest]
  //   store.setState({
  //     stack: newstack
  //   })
  // }

  // if (operator === 'CHS') {
  //
  //   let plusIndex = show.indexOf('+')
  //   let minIndex = show.indexOf('-')
  //
  //   if (show.includes('+')) {
  //     newShow = show.replace(show.charAt(plusIndex), '-');
  //     // store.setState({
  //     //   stack: '',
  //     //   show: newShow
  //     // })
  //
  //   } else if (show.includes('-')) {
  //     newShow = show.replace(show.charAt(minIndex), '+');
  //     // store.setState({
  //     //   stack: '',
  //     //   show: newShow
  //     // })
  //
  //   }
  //   newstack[newstack.length - 1] = -(newstack[newstack.length - 1])
  //
  // }


  if (newstack.length > 1) {

    switch (operator) {
      case '+':
        newstack[newstack.length - 2] = newstack[newstack.length - 2] + newstack[newstack.length - 1]
        newstack.pop()
        break;

      case '-':
        newstack[newstack.length - 2] = newstack[newstack.length - 2] - newstack[newstack.length - 1]
        newstack.pop()
        break;

      case '*':
        newstack[newstack.length - 2] = newstack[newstack.length - 2] * newstack[newstack.length - 1]
        newstack.pop()
        break;

      case '/':
        if (newstack[newstack.length - 1] !== 0) {
          newstack[newstack.length - 2] = newstack[newstack.length - 2] / newstack[newstack.length - 1]
          newstack.pop()
        }
        break;

      case 'XY':
        newstack[newstack.length - 2] = Math.pow(newstack[newstack.length - 2], newstack[newstack.length - 1]);
        newstack.pop()
        break;

      case'R':
        const [a,b,c] = store.state.stack
        newstack = [c,a,b]
        break;

      default:
        break;
    }
  }

  if (newstack.length >= 1) {
    if (arc === false) {
      switch (operator) {


        case 'SQRT':
          newstack[newstack.length - 1] = Math.sqrt(newstack[newstack.length - 1])
          break;

        case 'COS':
          newstack[newstack.length - 1] = Math.cos(radians(newstack[newstack.length - 1]))
          break;

        case 'SIN':
          newstack[newstack.length - 1] = Math.sin(radians(newstack[newstack.length - 1]))
          break;

        case 'LN':
          newstack[newstack.length - 1] = Math.log(newstack[newstack.length - 1])
          break;

        case 'TAN':
          newstack[newstack.length - 1] = Math.tan(radians(newstack[newstack.length - 1]))
          break;

        case '1/x':
          newstack[newstack.length - 1] = 1 / newstack[newstack.length - 1]
          break;

        case 'LOG':
          newstack[newstack.length - 1] = Math.log(newstack[newstack.length - 1]) / Math.LN10
          break;

        case 'EXP':
          newstack[newstack.length - 1] = Math.exp(newstack[newstack.length - 1])
          break;

        case'xy':
          const [x,y,...rest] = store.state.stack
          newstack = [y,x,...rest]
          break;

        case'STO':
          newStr = newstack[0]
          break;

        case 'RCL':
          newstack.push(Number(newStr))
          break;

        case'CLX':
          newstack.pop()
          newShow=''
          break;

        case 'CLR':
          newstack = ''
          newShow = ''
          break;

        case 'CHS':
        let plusIndex = show.indexOf('+')
        let minIndex = show.indexOf('-')

        if (show.includes('+')) {
          newShow = show.replace(show.charAt(plusIndex), '-');
        } else if (show.includes('-')) {
          newShow = show.replace(show.charAt(minIndex), '+');
        }

         newstack=[]
        newstack[newstack.length - 1] = -(newstack[newstack.length - 1])
          break;


        case 'ENTER':
          newstack[0]=Number(newstack[0])
          console.log(show.includes('e'));
           if(show.includes('e')){
             newShow=newstack[0].toString()
           }
           //newShow=''
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
          newstack[newstack.length - 1] = degrees(Math.acos(newstack[newstack.length - 1]))
          newShow=''
          break;

        case 'SIN':
          newstack[newstack.length - 1] = degrees(Math.asin(newstack[newstack.length - 1]))
          break;

        case 'TAN':
          newstack[newstack.length - 1] = degrees(Math.atan(newstack[newstack.length - 1]))
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
    stack: newstack,
    show: newShow,
    str:newStr
  })

}
