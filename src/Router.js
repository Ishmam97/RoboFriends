import {BrowserRouter , Switch , Route} from 'react-router-dom'
import React from 'react'
import Page from './Page'
import NotFound from './NotFound'

function Router() {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path='/' component={Page}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default Router
