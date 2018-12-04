import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Button, ButtonClassic, NavbarWrapper } from '../../styles'


class AppNavbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <div >
          <i className="fab fa-twitter"></i>
        </div>
        <div style={{ float: "right", marginRight: "4rem", marginTop: ".2rem" }}>
          <ButtonClassic as="a" href="/dashboard" >
            Login
          </ButtonClassic>
          <Button as="a" href="/dashboard" >
            Signup
          </Button>
        </div>
      </NavbarWrapper>
    )
  }
}

export default AppNavbar


// class AppNavbar extends Component {
//   render() {
//     return (
//       <div className="nav-container">
//         <div>
//           <i className="fab fa-twitter"></i>
//         </div>
//         <div className="tw-header--nav">
//           <ButtonClassic className="success">
//             <Link to="/login" className="login-link">Login</Link>
//           </ButtonClassic>
//           <ButtonClassic className="primary">
//             <Link to="/" className="signup-link">Signup</Link>
//           </ButtonClassic>
//         </div>
//       </div>
//     )
//   }
// }