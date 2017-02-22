import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkMenu from '../Links/linkMenu';
import Footer from '../footer/footer';

class LoginPage extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state={
      login: '',
      password: '',
      user: {}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/WebStore/store/user/";
    fetch((url + this.state.login), {
      method:'POST',
      body: JSON.stringify({
        password: this.state.password
      })
    })
    .then(response=>response.json())
    .then(json=>{
      this.setState({user: json});
      this.props.loginUser(this.state.user);
    });
  }

  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <LinkMenu page={'loginPage'} user={this.props.store.currentUser}/>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='lineInput'><div className='label'>Please, enter login:</div>
            <input type="text" placeholder="Login" className='inputField'
                 value={this.state.login}
                 onChange={this.handleLoginChange}
            /></div>
          <div className='lineInput'><div className='label'>Please, enter password:</div>
            <input type="password" placeholder="Password" className='inputField'
                 value={this.state.password}
                 onChange={this.handlePasswordChange}
            /></div>
          <button className='buttonSubmit'>Log in</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default connect(
  state=>({
    store: state
  }),
  dispatch=>({
    loginUser: (userState)=>{
      dispatch({
        type: 'LOGIN_USER',
        user: {currentUser: userState}
      });
    }
  })
)(LoginPage);
