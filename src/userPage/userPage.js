import React, { Component } from 'react';
import { connect } from 'react-redux';
import './userPage.css';
import LinkMenu from '../Links/linkMenu';
import Footer from '../footer/footer';

class UserPage extends Component{

  render() {
    return (
      <div>
        <LinkMenu page={'userPage'} />
          <div className='userProductDescriptionForm'>

            <div className='user'>
              <div className='image'>
                <img src={this.props.store[0].currentUser.photo} role='presentation' />
              </div>

              <div className='name'>
                {"Your name: " + this.props.store[0].currentUser.name + " " + this.props.store[0].currentUser.lastName}
              </div>

              <div className='email'>
                {"Email: " + this.props.store[0].currentUser.email}
              </div>
            </div>

          </div>

        <Footer />
      </div>
    );
  }
}

export default connect(
  state=>({
    store: state
  })
)(UserPage);
