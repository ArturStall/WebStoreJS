import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class LinkMenu extends Component {

  render() {
    let img = 'https://drive.google.com/uc?export=download&id=0B8GFIbD4I5HHVi02WWJWd3BGZFk';
    let login;
    if(!this.props.store[0]) {
      login = 'Guest';
    } else {
      login = this.props.store[0].currentUser.login;
    }

    if (!this.props.store[0]) {
      if(this.props.page==='productPage') {
        return (
          <div className='header_main'>
            <div className='header_top'>
              <img src={img}
              role='presentation'
              className='image_header' />
              <div className='userInfo'>
                User: {
                  login
                }
              </div>
            </div>
            <div className='header_bottom'>
              <div className='inside_header_bottom'>
                <Link to="/"              className="LinkHeader"> Main          </Link>
                <Link to="/registration"  className="LinkHeader"> Registration  </Link>
                <Link to="/login"         className="LinkHeader"> Log in        </Link>
              </div>
            </div>
          </div>
        )
      } else if(this.props.page==='registrationPage') {
        return (
          <div className='header_main'>
            <div className='header_top'>
              <img src={img}
              role='presentation'
              className='image_header' />
              <div className='userInfo'>
                User: {
                  login
                }
              </div>
            </div>
            <div className='header_bottom'>
              <div className='inside_header_bottom'>
                <Link to="/"      className="LinkHeader"> Main   </Link>
                <Link to="/login" className="LinkHeader"> Log in </Link>
              </div>
            </div>
          </div>
        )
      } else if(this.props.page==='loginPage') {
        return (
          <div className='header_main'>
            <div className='header_top'>
              <img src={img}
              role='presentation'
              className='image_header' />
              <div className='userInfo'>
                User: {
                  login
                }
              </div>
            </div>
            <div className='header_bottom'>
              <div className='inside_header_bottom'>
                <Link to="/"              className="LinkHeader"> Main         </Link>
                <Link to="/registration"  className="LinkHeader"> Registration </Link>
              </div>
            </div>
          </div>
        )
      } else return (
          <div className='header_main'>
            <div className='header_top'>
              <img src={img}
              role='presentation'
              className='image_header' />
              <div className='userInfo'>
                User: {
                  login
                }
              </div>
            </div>
            <div className='header_bottom'>
              <div className='inside_header_bottom'>
                <Link to="/"              className="LinkHeader"> Main          </Link>
                <Link to="/registration"  className="LinkHeader"> Registration  </Link>
                <Link to="/login"         className="LinkHeader"> Log in        </Link>
              </div>
            </div>
          </div>
        )
////////////////////////////////////////////////////////////////////////
    } else if(this.props.page==='userPage') {
      return (
        <div className='header_main'>
          <div className='header_top'>
            <img src={img}
            role='presentation'
            className='image_header' />
            <div className='userInfo'>
              User: {
                login
              }
            </div>
          </div>
          <div className='header_bottom'>
            <div className='inside_header_bottom'>
              <Link to="/"       className="LinkHeader"> Main    </Link>
              <Link to="/logout" className="LinkHeader"> Log out </Link>
            </div>
          </div>
        </div>
      )
    } if(this.props.page==='productPage') {
        return (
          <div className='header_main'>
          <div className='header_top'>
            <img src={img}
            role='presentation'
            className='image_header' />
            <div className='userInfo'>
              User: {
                login
              }
            </div>
          </div>
          <div className='header_bottom'>
            <div className='inside_header_bottom'>
              <Link to="/"        className="LinkHeader"> Main </Link>
              <Link to="/logout"  className="LinkHeader"> Log out </Link>
            </div>
          </div>
        </div>
      )
    } else return (
      <div className='header_main'>
        <div className='header_top'>
          <img src={img}
          role='presentation'
          className='image_header' />
          <div className='userInfo'>
            User: {
              login
            }
          </div>
        </div>
        <div className='header_bottom'>
          <div className='inside_header_bottom'>
            <Link to="/"        className="LinkHeader"> Main    </Link>
            <Link to="/user"    className="LinkHeader"> User    </Link>
            <Link to="/logout"  className="LinkHeader"> Log out </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({
    store: state
  })
)(LinkMenu);
