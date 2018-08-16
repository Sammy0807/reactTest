import React,{Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

class TimeLine extends Component{
  constructor(props){
    super(props)
    this.state={
      comments:[],
      newCommentbody:'',
      }
      this.handleNewComment = this.handleNewComment.bind(this)
      this.addComment = this.addComment.bind(this)
      this.createComment = this.createComment.bind(this)
  }

  handleNewComment(e){
    this.setState({
      newCommentbody: e.target.value
    })
  }

  createComment(){
      this.addComment(this.state.newCommentbody)
      this.setState({
        newCommentbody: ''
      })
  }

  addComment(commenting){
  const newState = Object.assign({}, this.state)
  newState.comments.push(commenting)
  this.setState(newState)
  }

  render(){
    return(<div>
      <div className="box text-dark bg-light" >
          <div className="row">
            <div className="col-sm-auto rounded">
                <img src="./images/svg/si-glyph-person-man.svg" className="proffs"/>
            </div>
            <div className="col-md-10 alert-rounded">
                    <div className="alert alert-primary">
                        <h6 className="text-muted text-bold">Remi</h6>
                        <p className="text">{this.props.postBody}</p>
                        <small className="footer text-muted">
                        <p><textarea type="text" placeholder="Comment" id="commentBox" value={this.state.newCommentbody} onChange={this.handleNewComment}/>
                        <FlatButton onClick={this.createComment}><img src="./images/svg/si-glyph-checked.svg" className="svg-icon"/></FlatButton>
                        <FlatButton><img src="./images/svg/si-glyph-like-unlike.svg" className="svg-icon"/></FlatButton>&nbsp;
                        <FlatButton><img src="./images/svg/si-glyph-like.svg" className="svg-icon"/></FlatButton>&nbsp;</p>
                        </small>
                    </div>
                    <div className="row">
                    {this.state.comments.map((commentBody, name)=>{
                      return(<div className="animated fadeIn" key={name}>
                        <div className="col-auto rounded"><img src="./images/svg/si-glyph-person-man.svg" className="proffs"/></div>
                      <div className="col-md-10 alert alert-secondary">
                      <h6 className="text-black">Zipporah Foster</h6>
                      <p className="text">{commentBody}</p>
                    </div>
                  </div>)
                })
            }
                </div>
          </div>
      </div>
    </div>
      <Divider/>
    </div>)
  }
}
TimeLine.propTypes = {
  postBody: PropTypes.string,
};

  export default TimeLine;
