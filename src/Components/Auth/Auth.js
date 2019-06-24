import React, { Component } from 'react'

class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password:''
    }
  }

  render() {
    return (
      <div>
        <input type='text' name='username' placeholder='Username'/>
        <input type='password' name='password' placeholder='Password'/>
        <button>Login</button>
        <button>Register</button>
        
      </div>
    )
  }
}


export default Auth;