import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="container">
    <h2>Register </h2>
    <form className="col-md-6" action="/" onSubmit={onSubmit}>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
      <label>Name:</label>< br/>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="form-group">
      <label>Username:</label>< br/>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
          errorText={errors.username}
          onChange={onChange}
          value={user.username}
        />
      </div>

      <div className="form-group">
      <label>Email:</label>< br/>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="form-group">
      <label>Password:</label>< br/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

       <button type="submit" className="btn btn-primary">Create Account</button>
      &nbsp;<p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  </div>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default RegisterForm;


// export default class Registerform extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       user:{
//       name:"",
//       username: "",
//       email: "",
//       password: ""
//     },
//     auth: ""
//   }
//   }
//
//   handleChange(e){
//     let newName = Object.assign({}, this.state.user)
//     newName[e.target.id] = e.target.value
//     this.setState({user: newName})
//   }
//
//   onSubmit(event){
//     event.preventDefault()
//           superagent
//           .post('/api/user')
//           .send(this.state.user)
//           .set('Accept', 'application/json')
//           .end((err, response)=>{
//           if(err){
//             alert('Error: '+err.message)
//             return
//           }
//           alert(this.state.user.name+' Succesffuly Registered!!!')
//           let results = response.body.results
//           this.setState({
//             user: results,
//             auth: "go!"
//           })
//         });
//   }
//
//     render(){
//       if(this.state.auth !== ""){
//         return <Redirect to='/login'/>
//       }
//     return(
// 	<div className="container">
//       <h1>Register</h1><br/>
//       <form className="col-md-6">
//         <div className="form-group">
//         <label>Name: </label>
//         <input type="text" id="name" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Name"/>
//         </div>
//         <div className="form-group">
//         <label>Username: </label>
//         <input type="text" id="username" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Username"/>
//         </div>
//         <div className="form-group">
//         <label>Email: </label>
//         <input type="email" id="email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Email"/>
//         </div>
//         <div className="form-group">
//         <label>Password: </label>
//         <input type="password" id="password" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Password"/>
//         </div>
//         <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-primary">Submit</button>&nbsp;
//         &nbsp;<Link to={'/login'}>Already have an Account?</Link>
//       </form>
// 		</div>);
// }
// }
