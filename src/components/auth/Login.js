import '../../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, ButtonClassic, Input, Checkbox } from '../../styles'
// import Navbar from '../layout/Navbar'


class Login extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div className="back-button">
            <Link to="/" className="tw-header--back_button" >
              <i className="fas fa-arrow-circle-left" />{'  '} Back
          </Link>
          </div>
          <h2>Login to Twitter</h2>
          <Input placeholder="Phone, email or username" type="text" /><br />
          <Input type="password" placeholder="Password" /><br />
          <ButtonClassic className="success">Login</ButtonClassic>

          <Checkbox
            onClick={() => this.props.onChange(!this.props.checked)}
          >
            <input type="checkbox" checked={this.props.checked} />
            {/* <label>{this.props.label}</label> */}
            Remember me
        </Checkbox>
        </Wrapper>
      </div>
    )
  }
}
export default Login