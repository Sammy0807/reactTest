import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './components/register'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Auth from './modules/Auth';
import App from './app'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
// import { browserHistory, Router } from 'react-router';
// import routes from './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();



ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Router>
			<div>
				<Route exact path='/' component={App} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/register' component={Register} />
			</div>
		</Router>
		</MuiThemeProvider>, document.getElementById('root'));
