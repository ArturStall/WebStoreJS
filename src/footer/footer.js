import React, { Component } from 'react';
import { Link } from 'react-router';
import './footer.css';

class Footer extends Component{

  render() {
    return (
      <div id="footer">

        <div id="blockFooter">
          <div className="footerParagraph">Information</div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">About us</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Site map</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Advanced search</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Search terms</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Contacts</Link></div>
        </div>

        <div id="blockFooter">
          <div className="footerParagraph">Why buy from us</div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Shipping & Returns</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Secure shopping</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Affilliates</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Group sales</Link></div>
          <div id="footerLink">_<Link to="/"></Link></div>
        </div>

        <div id="blockFooter">
          <div className="footerParagraph">My account</div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Sign in</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">View cart</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Help</Link></div>
          <div id="footerLink">_<Link to="/"></Link></div>
          <div id="footerLink">_<Link to="/"></Link></div>
        </div>

        <div id="blockFooter">
          <div className="footerParagraph">Follow us</div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Twitter</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">RSS</Link></div>
          <div id="footerLink"><div id="circle"></div><Link to="/" className="LF">Facebook</Link></div>
          <div id="footerLink">_<Link to="/"></Link></div>
          <div id="footerLink">_<Link to="/"></Link></div>
        </div>

        <div className="footerLine"></div>
        <div className="copyRight"><b>&#169; 2013 Magento Demo Store.</b> All Rights Reserved.</div>
      </div>
    );
  }
}

export default Footer;
