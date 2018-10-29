import React from 'react'
import { Wrapper, Button, Input, Checkbox } from '../styles'

class Signup extends React.Component {
  render() {
    return (
        <Wrapper>
          <h2>Join Twitter today</h2>
          <Input placeholder="Full name" type="text" /><br />
          <Input placeholder="Phone or email" type="text" /><br />
          <Input type="password" placeholder="Password" /><br />
          <Button>Login</Button>

          <Checkbox onClick={() => this.props.onChange(!this.props.checked)}>
            <input type="checkbox" checked={this.props.checked} />
            <label>{this.props.label}</label>
            Remember me
          </Checkbox>

        </Wrapper>
    )
  }
}

export default Signup
