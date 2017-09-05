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
                  />
                  <OperationalButtons
                     label='LOG'
                  />

                   <OperationalButtons
                     label='LN'

                    />

                  <OperationalButtons
                     label='ex'
                    />

                  <OperationalButtons
                     label='CLR'
                  />

                  <OperationalButtons
                     label='√x'
                  />

                  <OperationalButtons
                     label='ARC'
                  />

                  <OperationalButtons
                     label='SIN'
                  />

                  <OperationalButtons
                     label='COS'
                  />

                  <OperationalButtons
                     label='TAN'
                  />

                  <OperationalButtons
                     label='1/x'
                  />

                  <OperationalButtons
                     label='x↔y'
                  />

                  <OperationalButtons
                     label='R|'
                  />

                  <OperationalButtons
                     label='STO'
                  />

                  <OperationalButtons
                     label='RCL'
                  />
               </div>
               <div className='keyset_first_2'>

                  <OperationalButtons
                     label='ENTER ↑'
                  />

                  <OperationalButtons
                     label='CHS'
                  />

                  <OperationalButtons
                     label='EEX'
                  />

                  <OperationalButtons
                     label='CLX'
                  />
            </div>
          </div>

          <div className ='keyset_second'>
              <div className='keyset_second_1'>
                  <OperationalButtons
                     label='-'
                  />
                  <OperationalButtons
                     label='+'
                  />
                   <OperationalButtons
                     label='*'
                    />
                  <OperationalButtons
                     label='/'
                    />
               </div>
               <div className='keyset_second_2'>

                  <CountableButtons
                     label='0'
                  />
                  <CountableButtons
                     label='1'
                  />
                  <CountableButtons
                     label='2'
                  />
                  <CountableButtons
                     label='3'
                  />
                  <CountableButtons
                     label='4'
                  />
                  <CountableButtons
                     label='5'
                  />
                  <CountableButtons
                     label='6'
                  />
                  <CountableButtons
                     label='7'
                  />
                  <CountableButtons
                     label='8'
                  />
                  <CountableButtons
                     label='9'
                  />
                  <CountableButtons
                     label='.'
                  />
                  <CountableButtons
                     label='π'
                  />
             </div>
          </div>
      </div>
    )
  }

  HandelClick(value){
     const screen={...this.state}

  }



}
