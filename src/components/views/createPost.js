import React,{Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'

export default class CreatePost extends Component{
  constructor(props){
    super(props);
      this.state={
        newPostBody:'',
      }
      this.handleNewPost = this.handleNewPost.bind(this)
      this.createPost = this.createPost.bind(this);
  }
  handleNewPost(e){
    e.preventDefault();
    this.setState({
      newPostBody: e.target.value
    })
  }

  createPost(){
    this.props.addPost(this.state.newPostBody)
    const posts = {
      newPostBody: this.state.newPostBody
                  }
    axios.post(`api/crud`, {posts})
        .then((res)=>{
      this.setState({
        newPostBody: ''
      })
    })
    }
  render(){
    return(<div>
            <form>
                <div className="md-form">
                  <textarea placeholder=" Tell Us All About It..." className="md-textarea bg-white mt-5" length="420" value={this.state.newPostBody} onChange={this.handleNewPost}/>&nbsp;
                  <FlatButton className="float-right" onClick={this.createPost}><img src="./images/svg/si-glyph-bubble-message-text.svg" className="svg-icon" /></FlatButton>&nbsp;
                  <FlatButton className="btn-file float-right"><img src="./images/svg/si-glyph-image.svg" className="svg-icon" /><input type="file"/></FlatButton>&nbsp;
                  <FlatButton className="btn-file float-right"><img src="./images/svg/si-glyph-movie-play.svg" className="svg-icon" /><input type="file"/></FlatButton>&nbsp;
                  <FlatButton className="btn-file float-right"><img src="./images/svg/si-glyph-music-note.svg" className="svg-icon" /><input type="file"/></FlatButton>&nbsp;
                </div>
            </form>
    </div>
    );
  }
}
