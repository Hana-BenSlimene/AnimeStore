import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Add from '../pages/Add';
class MainApp extends React.Component {
    render() {
        return (
            <Router>
             <Switch>
                <Route 
                    path={'/'} 
                    exact
                    component={Home} 
                />
                <Route 
                    path='/movies'
                    exact
                    component={Movies} 
                />
                <Route 
                    path='/add'
                    exact
                    component={Add} 
                />
             </Switch>
            </Router>
        )
    }
}


export default MainApp ;