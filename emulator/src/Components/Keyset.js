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
                     label='Xy'
                     value=''
                  />
                  <OperationalButtons
                     label='LOG'
                     value=''
                  />

                   <OperationalButtons
                     label='LN'
                     value=''
                    />

                  <OperationalButtons
                     label='EX'
                     value=''
                    />

                  <OperationalButtons
                     label='CLR'
                     value=''
                  />

                  <OperationalButtons
                     label='√x'
                     value=''
                  />

                  <OperationalButtons
                     label='ARC'
                     value=''
                  />

                  <OperationalButtons
                     label='SIN'
                     value=''
                  />

                  <OperationalButtons
                     label='COS'
                     value=''
                  />

                  <OperationalButtons
                     label='TAN'
                     value=''
                  />

                  <OperationalButtons
                     label='1/x'
                     value=''
                  />

                  <OperationalButtons
                     label='x↔y'
                     value=''
                  />

                  <OperationalButtons
                     label='R |'
                     value=''
                  />

                  <OperationalButtons
                     label='STO'
                     value=''
                  />

                  <OperationalButtons
                     label='RCL'
                     value=''
                  />
               </div>
               <div className='keyset_first_2'>

                  <OperationalButtons
                     label='ENTER ↑'
                     value='ENTER'
                  />

                  <OperationalButtons
                     label='CHS'
                     value=''
                  />

                  <OperationalButtons
                     label='EEX'
                     value=''
                  />

                  <OperationalButtons
                     label='CLX'
                     value=''
                  />
            </div>
          </div>

          <div className ='keyset_second'>
              <div className='keyset_second_1'>
                  <OperationalButtons
                     label='-'
                     value=''
                  />
                  <OperationalButtons
                     label='+'
                     value=''
                  />
                   <OperationalButtons
                     label='*'
                     value=''
                    />
                  <OperationalButtons
                     label='/'
                     value=''
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
                     value='π'
                  />
             </div>
          </div>
      </div>
    )
  }





}
