import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-message"> Chaos Coffee</div>
        <img src="chaos.png" alt="chaos" /> 
        <div className="footer-message">A Gift from the Dark Gods</div>
      </div>
    );
  }
}

export default Header;
