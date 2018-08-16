import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import RegisterForm from './views/registerForm'

class Register extends React.Component {

  constructor(props, context) {
  super(props, context);

    // set the initial component state
  this.state = {
      errors: {},
      user: {
        name: '',
        username: '',
        email: '',
        password: ''
      },
      yekpa: ''
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }


  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const username = encodeURIComponent(this.state.user.username);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&username=${username}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/register');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
      // change the component-container state
        this.setState({
          errors: {},
          yekpa: 'go'
        });
        // set a message
        localStorage.setItem('successMessage', xhr.response.message);
        // make a redirect
        // this.context.router.replace('/login');
      } else {

        // failure
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    if(this.state.yekpa !== ''){
      return <Redirect to='/login' />
    }
    return (
      <RegisterForm style={{paddingTop: 50, paddingBottom: 50}}
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

Register.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Register;
