import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Home from './pages/Home'
import Add from './pages/Add'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Container>
                  <Home />
                  <Add />
                </Container>
            </div>
      </Router>
    );
  }
}

export default App