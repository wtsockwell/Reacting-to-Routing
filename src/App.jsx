import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './views/Home'
import Films from './views/Films'
import Characters from './views/Characters'
import FilmDetails from './views/FilmDetails'
import CharacterDetails from './views/CharacterDetails'

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
                    <Route exact path="/Films/:Filmsid">
                        <FilmDetails />
                    </Route>
                    <Route exact path="/Characters/">
                        <Characters />
                    </Route>
                    <Route exact path="/Characters/:Charactersid">
                        <CharacterDetails />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}

export default App