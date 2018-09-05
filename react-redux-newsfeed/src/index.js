import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class Homepage extends React.Component {

	constructor(props){
		super(props);		
	}
	
	render() {
      return (
        <Router>
            <div>
               <h2>Welcome to React Webpack4 Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
			</div>
		</Router>
      );
   }
}

export default Homepage;