import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Chats from './modals/chat';
import TextField from 'material-ui/TextField';


const PeopleOnline = ({})=> (<div>
    <Chats/>
    <div className="alert alert-secondary" role="alert">
    <h6>i will have a lot of seo implimentation here just u wait and see!</h6>
    <img src="./images/svg/si-glyph-champion-cup.svg" className="svg-icon" />
    </div>
    <div className="card mb-3" >
    <div className="card-header">Friends Available Online</div>
      <div className="card-body">
      <List>
        <Subheader></Subheader>
        <ListItem
          data-toggle="modal"
          data-target="#exampleModal"
          modal="true"
          primaryText="Ogbonna"
          leftAvatar = {<Avatar src="./images/svg/si-glyph-person-man.svg" />}
          rightIcon={<CommunicationChatBubble />}
        />
      <Divider/>
        <ListItem
          data-toggle="modal"
          data-target="#exampleModal"
          modal="true"
          primaryText="Bisade"
          leftAvatar={<Avatar src="./images/svg/si-glyph-person-woman.svg"/>}
          rightIcon = {<CommunicationChatBubble />}
        />
      <Divider/>
        <ListItem
        data-toggle="modal"
        data-target="#exampleModal"
        modal="true"
        primaryText="Sammy"
        leftAvatar={<Avatar src="./images/svg/si-glyph-person-man.svg"/>}
        rightIcon = {<CommunicationChatBubble />}
            />
          </List>
      </div>
    </div>
  </div>);
  PeopleOnline.propTypes = {
  };

  export default PeopleOnline;
