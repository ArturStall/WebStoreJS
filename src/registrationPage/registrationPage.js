import React, { Component } from 'react';
import { connect } from 'react-redux';
import './registrationPage.css'
import LinkMenu from '../Links/linkMenu';
import Footer from '../footer/footer';

class RegistrationPage extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state={
      name: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      user: {}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/WebStore/store/user";
    fetch(url, {
      method:'POST',
      body: JSON.stringify(this.state)
    })
      .then(response=>response.json())
      .then(json=>{
        this.setState({user: json});
        this.props.loginUser(this.state.user);
      });
	}

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <LinkMenu page={'registrationPage'} />
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='lineInput'><div className='label'>Please, enter your name:</div>
          <input type="text" placeholder="Name" className='inputField'
                 value={this.state.name}
                 onChange={this.handleNameChange}
          /></div>
          <div className='lineInput'><div className='label'>Please, enter your last name:</div>
          <input type="text" placeholder="Last Name" className='inputField'
                 value={this.state.lastName}
                 onChange={this.handleLastNameChange}
          /></div>
          <div className='lineInput'><div className='label'>Please, enter login:</div>
          <input type="text" placeholder="Login" className='inputField'
                 value={this.state.login}
                 onChange={this.handleLoginChange}
          /></div>
          <div className='lineInput'><div className='label'>Please, enter your Email:</div>
          <input type="text" placeholder="E-mail" className='inputField'
                 value={this.state.email}
                 onChange={this.handleEmailChange}
          /></div>
          <div className='lineInput'><div className='label'>Please, enter password:</div>
          <input type="password" placeholder="Password" className='inputField'
                 value={this.state.password}
                 onChange={this.handlePasswordChange}
          /></div>
          <button className='buttonSubmit'>Registration</button>
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
)(RegistrationPage);
