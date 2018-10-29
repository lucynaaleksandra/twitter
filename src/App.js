import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { Nav } from './styles'

class App extends React.Component {
  render() {
    return (
      <div id="#root" className="App-header">
        <div>
        <Nav >
          <Link to="/" className="tw-header--signup">Signup</Link>
          <Link to="/login" className="tw-header--login">Login</Link>
        </Nav>
          <Route path="/" component={Signup} exact={true} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    )
  }
}

export default App