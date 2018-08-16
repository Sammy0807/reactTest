import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton'
import FileFileUpload from 'material-ui/svg-icons/file/file-upload'

const PixUpload = ({}) => (<div>
      <form>
          <div className="form-group">
          <label>Pick an Image: </label>
          <FlatButton className="btn-file">{<FileFileUpload/>}<input type="file"/></FlatButton>
          </div>
      </form>
  </div>);

  PixUpload.propTypes = {
  };

  export default PixUpload;
