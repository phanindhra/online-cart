import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/homepage';
import Cart from './pages/cartpage';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}
export default Routes;

