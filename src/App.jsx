import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './views/Home'
import Films from './views/Films'
import Characters from './views/Characters'

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Films/">
                        <Films />
                    </Route>
                    <Route exact path="/Characters/">
                        <Characters />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}

export default App