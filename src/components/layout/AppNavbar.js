import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, ButtonClassic } from '../../styles'


class AppNavbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="tw-header--nav">
          <ButtonClassic className="success">
            <Link to="/login" className="login-link">Login</Link>
          </ButtonClassic>
          <ButtonClassic className="primary">
            <Link to="/" className="signup-link">Signup</Link>
          </ButtonClassic>
        </div>
      </div>
    )
  }
}

export default AppNavbar