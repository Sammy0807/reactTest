import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import AppBar from './views/AppBar'
import ProfileImage from './views/ProfileImage'
import ProfileInfo from './views/profileInfo'
import Pics from './views/pics'
import CreatePost from './views/createPost'
import PeopleOnline from './views/peopleOnline'
import TimeLine from './views/timeLine'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
    };

    this.addPost = this.addPost.bind(this)

  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {}

  addPost(newPostBody){
    const newState = Object.assign({}, this.state)
    newState.posts.push(newPostBody)
    this.setState(newState)
  }
  /**
   * Render the component.
   */
  render() {
    return (<div>
      <AppBar/>
      <div className="row">
          <div className="col-md-3">
          <div className="container animated fadeIn">
              <ProfileImage/>
              <ProfileInfo/>
              <Pics/></div>
          </div>
        <div className="col-md-6 animated fadeIn">
        <div className="container animated fadeIn">
        <CreatePost addPost={this.addPost} />
        {this.state.posts.map((postBody, idx)=>{
          return(
          <TimeLine className="animated fadeIn" key={idx}
                    postBody={postBody}
          />)
        })
        }
        </div>
        </div>
        <div className="col-md-3">
        <div className="container animated fadeInRight">
        <PeopleOnline/></div>
        </div>
      </div>

      </div>
    );
  }

}

export default Dashboard;
