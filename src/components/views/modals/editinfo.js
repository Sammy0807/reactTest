import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EditInfo = ({}) => (<div>
          <form>
            <div className="form-group">
              <img src="./images/svg/si-glyph-congratulation-hat.svg" className="svg-icon" />&nbsp;
              <input type="text" className="rounded" placeholder="School Attended"/>
            </div>

            <div className="form-group">
              <img src="./images/svg/si-glyph-heart-signal.svg" className="svg-icon" />&nbsp;
              <input type="text" className="rounded" placeholder="Interests"/>
            </div>

            <div className="form-group">
              <img src="./images/svg/si-glyph-pin-location.svg" className="svg-icon" />&nbsp;
              <input type="text" className="rounded" placeholder="Address"/>
            </div>

            <div className="form-group">
              <img src="./images/svg/si-glyph-suitcase-person.svg" className="svg-icon" />&nbsp;
              <input type="text" className="rounded" placeholder="Occupation"/>
            </div>
          </form>
  </div>);

  EditInfo.propTypes = {
  };

  export default EditInfo;
