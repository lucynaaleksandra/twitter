import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'

class App extends React.Component {
  render() {
    return (
      <div id="#root" className="App-header">
        {/* <header> */}
          {/* <nav>
            <Link to="/" className="tw-header--signup">Signup</Link>
            <Link to="/login" className="tw-header--login">Login</Link>
          </nav> */}
        {/* </header> */}
        <Route path="/" component={Signup} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

export default App