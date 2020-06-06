import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import OrderView from './Views/Order-View';
import KitchenView from './Views/Kitchen-View';
import ReadyView from './Views/Ready-View';
//import Link from 'react-router-dom'

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={OrderView} />
          <Route exact path='/OrderView' component={OrderView} />
          <Route exact path='/KitchenView' component={KitchenView} />
          <Route exact path='/ReadyView' component={ReadyView} />
        </Switch>
      </BrowserRouter>
    )
}
export default Routes;