import React from 'react';
import App from '../Components/App'
import {Route,IndexRoute} from 'react-router'

const createRoutes=()=>{
  return(
    <Route
      path='/'
      component={App}
      >


  </Route>
  )
}

 const Routes = createRoutes()
 export default Routes
