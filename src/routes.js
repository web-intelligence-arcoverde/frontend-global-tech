import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Pedidos  from './pages/Pedidos';

const Routes = () => {
    return(
    
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/pedidos" component={Pedidos} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;