import React from 'react'
import{CountableButtons,OperationalButtons} from '.'
import '../Css/Keyset.css'

export default class Keyset extends React.Component{

  render(){


    return(
      <div className ='Keyset'>

        <div className ='keyset_first'>
               <div className='keyset_first_1'>
                  <OperationalButtons
                     label='Xʸ'
                     value='XY'
                  />
                  <OperationalButtons
                     label='LOG'
                     value='LOG'
                  />

                   <OperationalButtons
                     label='LN'
                     value='LN'
                    />

                  <OperationalButtons
                     label='eˣ'
                     value='EXP'
                    />
                <div className='green'>
                  <OperationalButtons
                     label='CLR'
                     value='CLR'
                  />
                 </div>
                  <OperationalButtons
                     label='√x'
                     value='SQRT'
                  />

                 <div className='pink'>
                  <OperationalButtons
                     label='ARC'
                     value='ARC'
                  /> </div>

                 <div className='pink'>
                  <OperationalButtons
                     label='SIN'
                     value='SIN'
                  /> </div>
                  <div className='pink'>
                  <OperationalButtons
                     label='COS'
                     value='COS'
                  /></div>
                  <div className='pink'>
                  <OperationalButtons
                     label='TAN'
                     value='TAN'
                  /></div>

                  <OperationalButtons
                     label='¹/x'
                     value='1/x'
                  />

                  <OperationalButtons
                     label='x↔y'
                     value=''
                  />

                  <OperationalButtons
                     label='R↓'
                     value='R'
                  />

                  <OperationalButtons
                     label='STO'
                     value='STO'
                  />

                  <OperationalButtons
                     label='RCL'
                     value='RCL'
                  />
               </div>
               <div className='keyset_first_2' >

                  <OperationalButtons
                     label='ENTER ↑'
                     value='ENTER'
                  />

                  <OperationalButtons
                     label='CHS'
                     value='CHS'
                  />

                  <OperationalButtons
                     label='EEX'
                     value=''
                  />

                  <OperationalButtons
                     label='CLX'
                     value='CLX'
                  />
            </div>
          </div>

          <div className ='keyset_second'>
              <div className='keyset_second_1' >
                  <OperationalButtons
                     label='−'
                     value='-'
                  />
                  <OperationalButtons
                     label='+'
                     value='+'
                  />
                   <OperationalButtons
                     label='×'
                     value='*'
                    />
                  <OperationalButtons
                     label='/'
                     value='/'
                    />
               </div>
               <div className='keyset_second_2'>

                  <CountableButtons
                     label='0'
                     value='0'
                  />
                  <CountableButtons
                     label='1'
                     value='1'
                  />
                  <CountableButtons
                     label='2'
                     value='2'
                  />
                  <CountableButtons
                     label='3'
                     value='3'
                  />
                  <CountableButtons
                     label='4'
                     value='4'
                  />
                  <CountableButtons
                     label='5'
                     value='5'
                  />
                  <CountableButtons
                     label='6'
                     value='6'
                  />
                  <CountableButtons
                     label='7'
                     value='7'
                  />
                  <CountableButtons
                     label='8'
                     value='8'
                  />
                  <CountableButtons
                     label='9'
                     value='9'
                  />
                  <CountableButtons
                     label='.'
                     value='.'
                  />
                  <CountableButtons
                     label='π'
                     value='3.14'
                  />
             </div>
          </div>
      </div>
    )
  }





}
