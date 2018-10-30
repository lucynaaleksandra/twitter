import React from 'react'
import '../App.css'
import { Wrapper, Button, Input, Checkbox } from '../styles'

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Login to Twitter</h2>
        <Input placeholder="Phone, email or username" type="text" /><br />
        <Input type="password" placeholder="Password" /><br />
        <Button>Login</Button>

        <Checkbox
          onClick={() => this.props.onChange(!this.props.checked)}
        >
          <input type="checkbox" checked={this.props.checked} />
          {/* <label>{this.props.label}</label> */}
            Remember me
        </Checkbox>
      </Wrapper>
    )
  }
}
export default Login