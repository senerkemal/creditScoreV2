import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router-dom';

const history = createBrowserHistory();

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
            <Router history={history}>
                <Switch>
                    <Route path= '/' exact={true} component = {Home}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
      </div>
     );
  }
}
 
export default App;

