import React from 'react';
import PropTypes from 'prop-types';
import EditInfo from './modals/EditInfo'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'


export default class ProfileInfo extends React.Component{
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
  <div className="card mb-3" >
      <h5 className="card-header">
      About Remi&nbsp;
      <FlatButton onClick={this.handleOpen}>
      <img src="./images/svg/si-glyph-pen.svg" className="svg-icon"/></FlatButton>
      </h5>

      <div className="card-body">
      <p className="card-text">
      <img src="./images/svg/si-glyph-congratulation-hat.svg" className="svg-icon" />&nbsp;  schooled at <a href="#">school</a>
      </p>
      <p className="card-text">
      <img src="./images/svg/si-glyph-person-public.svg" className="svg-icon" />&nbsp;  is friends with <a href="#">bill gates</a>
      </p>
      <p className="card-text">
      <img src="./images/svg/si-glyph-pin-location.svg" className="svg-icon" />&nbsp;lives in <a href="#">uranus</a>
      </p>
      <p className="card-text">
      <img src="./images/svg/si-glyph-suitcase-person.svg" className="svg-icon" />&nbsp; works at. <a href="#">baller town</a>
      </p>
      </div>
  </div>
  <Dialog
    actions ={actions}
    modal = {false}
    open = {this.state.open}
    onRequestClose={this.handleClose}>
    <EditInfo/>
    </Dialog>

  </div>);
}
}
