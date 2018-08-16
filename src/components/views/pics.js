import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import PixUpload from './modals/PixUpload'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Image from 'react-image-resizer'

export default class Pics extends React.Component{
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


handleOpen (){
  this.setState({open:true});
}
handleClose (){
  this.setState({open:false});
}
render(){
  const actions =[
    <FlatButton
      label = "Cancel"
      primary ={true}
      onClick = {this.handleClose} />,
    <FlatButton
      label="Discard"
      primary={true}
      onClick={this.handleClose} />
  ];

  return (<div>
    <div className="card m-2" >
    <h4 className="card-header">Photos
    <FlatButton onClick={this.handleOpen}>
    <img src="./images/svg/si-glyph-file-upload.svg" className="svg-icon" />
    </FlatButton>
    </h4>
        <div className="card-body">
        <div className="col-sm-auto">
            <div className="btn-group" role="group">
              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg"/>
                <p className="dark-text">Caption</p>
              </button>

              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg" />
                <p className="dark-text">Caption</p>
              </button>

              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg" />
                <p className="dark-text">Caption</p>
              </button>
            </div>

            <div className="btn-group" role="group">
              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg" />
                <p className="dark-text">Caption</p>
              </button>

              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg" />
                <p className="dark-text">Caption</p>
              </button>

              <button type="button" className="btn">
                <Avatar src="/images/IMG_20171211_194254.jpg" />
                <p className="dark-text">Caption</p>
              </button>
              </div>
            </div>
        </div>
    </div>

  <Dialog
    actions ={actions}
    modal = {false}
    open = {this.state.open}
    onRequestClose={this.handleClose}>
    <PixUpload/>
    </Dialog>

  </div>);
}
}




// <img src="/images/IMG_20171211_194254.jpg" className="proffs"/>
// <p className="dark-text">Caption</p>
//
// <img src="/images/20170603_091321_007.jpg" className="proffs"/>
//
// <p className="dark-text">Caption</p>
//
// <img src="/images/20170603_091321_007.jpg" className="proffs"/>
//
// <p className="dark-text">Caption</p>
//
// <img src="/images/IMG_20171211_194254.jpg" className="proffs"/>
//
// <p className="dark-text">Caption</p>
//
// <img src="/images/20170603_091321_007.jpg" className="proffs"/>
//
// <p className="dark-text">Caption</p>
//
// <img src="/images/received_1891538774193100.jpeg" className="proffs" />
//
// <p className="dark-text">Caption</p>
