

import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'



export default function RouterHandler() {
    return (
        <>
        <div>
            <Router>
            <Navbar />
                <Switch>
                
                    <Route path="/" component={Home}></Route>
                    {/* <Route path="/docs" component={Home}></Route>
                    <Route path="/tutorial" component={Home}></Route>
                    <Route path="/Blog" component={Home}></Route>
                    <Route path="/Community" component={Home}></Route> */}


                </Switch>
            </Router>
        </div>
        </>
    )
}
