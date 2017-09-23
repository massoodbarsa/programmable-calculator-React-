import React from 'react'
import{CountableButtons,OperationalButtons} from '.'
import '../Css/Keyset.css'
import * as keyCode from './keyCodes'


export default class Keyset extends React.Component{

  render(){


    return(
      <div className ='Keyset'>

        <div className ='keyset_first'>
               <div className='keyset_first_1'>
                  <OperationalButtons
                     label='Xʸ'
                     value={keyCode.POW}

                  />
                  <OperationalButtons
                     label='LOG'
                     value={keyCode.LOG}
                  />

                   <OperationalButtons
                     label='LN'
                     value={keyCode.LN}
                    />

                  <OperationalButtons
                     label='eˣ'
                     value={keyCode.EXP}
                    />
                <div className='green'>
                  <OperationalButtons
                     label='CLR'
                     value={keyCode.CLR}
                  />
                 </div>
                  <OperationalButtons
                     label='√x'
                     value={keyCode.SQRT}
                  />

                 <div className='pink'>
                  <OperationalButtons
                     label='ARC'
                     value={keyCode.ARC}
                  /> </div>

                 <div className='pink'>
                  <OperationalButtons
                     label='SIN'
                     value={keyCode.SIN}
                  /> </div>
                  <div className='pink'>
                  <OperationalButtons
                     label='COS'
                     value={keyCode.COS}
                  /></div>
                  <div className='pink'>
                  <OperationalButtons
                     label='TAN'
                     value={keyCode.TAN}
                  /></div>

                  <OperationalButtons
                     label='¹/x'
                     value={keyCode.RECIPROCAL}
                  />

                  <OperationalButtons
                     label='x↔y'
                     value={keyCode.SWAP}
                  />

                  <OperationalButtons
                     label='R↓'
                     value={keyCode.ROLL_DOWN}
                  />

                  <OperationalButtons
                     label='STO'
                     value={keyCode.STO}
                  />

                  <OperationalButtons
                     label='RCL'
                     value={keyCode.RCL}
                  />
               </div>
               <div className='keyset_first_2' >

                  <OperationalButtons
                     label='ENTER ↑'
                     value={keyCode.ENTER}
                  />

                  <OperationalButtons
                     label='CHS'
                     value={keyCode.CHS}
                  />

                  <OperationalButtons
                     label='EEX'
                     value={keyCode.EEX}
                  />

                  <OperationalButtons
                     label='CLX'
                     value={keyCode.CLX}
                  />
            </div>
          </div>

          <div className ='keyset_second'>
              <div className='keyset_second_1' >
                  <OperationalButtons
                     label='−'
                     value={keyCode.SUB}
                  />
                  <OperationalButtons
                     label='+'
                     value={keyCode.ADD}
                  />
                   <OperationalButtons
                     label='×'
                     value={keyCode.MUL}
                    />
                  <OperationalButtons
                     label='÷'
                     value={keyCode.DIV}
                    />
               </div>
               <div className='keyset_second_2'>


                 <CountableButtons
                    label='7'
                    value={keyCode.D7}
                 />
                 <CountableButtons
                    label='8'
                    value={keyCode.D8}
                 />
                 <CountableButtons
                    label='9'
                    value={keyCode.D9}
                 />

                 <CountableButtons
                    label='4'
                    value={keyCode.D4}
                 />
                 <CountableButtons
                    label='5'
                    value={keyCode.D5}
                 />
                 <CountableButtons
                    label='6'
                    value={keyCode.D6}
                 />
                  <CountableButtons
                     label='1'
                     value={keyCode.D1}
                  />
                  <CountableButtons
                     label='2'
                     value={keyCode.D2}
                  />
                  <CountableButtons
                     label='3'
                     value={keyCode.D3}
                  />

                  <CountableButtons
                     label='0'
                     value={keyCode.D0}
                  />
                  <OperationalButtons
                     label='.'
                     value={keyCode.DOT}
                  />

                  <OperationalButtons
                     label='π'
                     value={keyCode.PI}
                  />
             </div>
          </div>
      </div>
    )
  }





}
