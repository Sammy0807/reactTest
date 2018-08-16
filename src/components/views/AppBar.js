import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppBar = ({}) => (<div>
  <nav className="navbar navbar-expand-lg navbar-dark indigo">

      <a className="navbar-brand" href="#">Sammys Fake Facebook</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto"></ul>

          <form className="form-inline">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          </form>
          <Link to="#"><img src="./images/20171206_141141.png" className="svg-icon rounded bg-white"/></Link>
      </div>

  </nav>


</div>);

AppBar.propTypes = {
};

export default AppBar;
