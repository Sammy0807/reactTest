import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit} className="col-md-6">
      <h2>Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
      <label>Username:</label>< br/>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
          errortext={errors.username}
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="form-group">
      <label>Password:</label>< br/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
          onChange={onChange}
          errortext={errors.password}
          value={user.password}
        />
      </div>

      <button type="submit" className="btn btn-dark">Sign In</button>
      &nbsp;<p>Dont have an account? <Link to={'/register'}>Create one</Link>.</p>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
