import Base from './components/Base';
import Dashboard from './components/dashboard.js';
import HomePage from './components/HomePage.jsx';
import Login from './components/login.js';
import Register from './components/register.js';
import App from './app';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, Login);
        }
      }
    },

    {
      path: '/login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      component: Register
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
