import React from 'react'
import { Wrapper, Button, Input } from '../styles'

class Signup extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Join Twitter today</h2>
        <Input placeholder="Full name" type="text" className="tw-name" /><br/>
        <Input placeholder="Phone or email" type="text" className="tw-ph_email" /><br/>
        <Input type="password" placeholder="Password" className="pass" /><br/>
        <Button>Login</Button>
      </Wrapper>
    )
  }
}

export default Signup
