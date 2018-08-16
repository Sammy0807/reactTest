import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const Chats =({}) => (
  <div className="modal fade" id="exampleModal" tabIndex="-1" data-backdrop="false" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"><Avatar src="./images/svg/si-glyph-person-woman.svg" alt="./images/svg/si-glyph-person-woman.svg" /></h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body bg-unique">
        <div className="alert alert-primary">aajjnajnaja</div>
        <div className="alert alert-success animated fadeInUpBig">hahahaha</div>
      </div>
      <div className="modal-footer">
        <FlatButton type="button" className="float-left"><img src='./images/svg/si-glyph-emoticon.svg' alt='./images/svg/si-glyph-emoticon.svg' className="svg-icon"/></FlatButton>
        <input type="text" placeholder="type a message"/>
        <FlatButton type="button" className="float-right"><img src='./images/svg/si-glyph-checked.svg' className="svg-icon"/></FlatButton>
      </div>
    </div>
  </div>
</div>
);
Chats.propTypes={}
export default Chats;
