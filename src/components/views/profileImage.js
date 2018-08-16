import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Image from 'react-image-resizer';

const proPix={
  backgroundImage: "url(/images/received_1891538774193100.png",
  position: 'relative',
  height: 15+'em',
  width: 100+'%'
}
const ProfileImage = ({}) => (<div>
    <div className="card mb-3" >
        <div style={proPix} >
        <img src="/images/20171206_141141.png" className="proffr hoverable"/>
        </div>
        <div className="card-body">
        <h5 className="card-title center">Remi</h5>
        <p className="card-text-center">Coolest kid on the block, we bout that life son!</p>
        </div>
    </div>
  </div>);

ProfileImage.propTypes = {
};

export default ProfileImage;
