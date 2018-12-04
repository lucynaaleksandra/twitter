import React, { Component } from 'react'
import AppNavbar from './layout/AppNavbar'
import Login from './auth/Login'
import Signup from './auth/Signup'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Login />
        <Signup />
      </div>
    )
  }
}

export default Dashboard