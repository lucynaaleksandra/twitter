import '../../App.css'
import React from 'react'
// import { Link } from 'react-router-dom'
import { Wrapper, ButtonClassic, BackButton, Input, Checkbox } from '../../styles'
import AppNavbar from '../layout/AppNavbar'


class Login extends React.Component {
  state = { checked: false }

  onChange() {
    this.getSnapshotBeforeUpdate({
      checked: true
    })
  }

  render() {
    return (
      <div>
        <Wrapper>
          <AppNavbar />

        <div style={{ marginBottom: "4rem", float: "left" }}>
          <BackButton as="a" href="/login" >
            <i className="fas fa-arrow-circle-left" />{' '} Go Back
          </BackButton>
        </div>

          <div>
            <h2>Login to Twitter</h2>
            <Input placeholder="Phone, email or username" type="text" /><br />
            <Input type="password" placeholder="Password" /><br />
            <ButtonClassic as="a" href="/login">
              Login
            </ButtonClassic>
            
            <Checkbox>
              <input type="checkbox"
                checked={this.props.checked}
              // onClick={() => this.onChange(!this.props.checked)}
              />
              {/* <label>{this.props.label}</label> */}
              Remember me
            </Checkbox>
          </div>
        </Wrapper>
      </div>
    )
  }
}
export default Login

// class Login extends React.Component {
//   render() {
//     return (
//       <div>
//         <Wrapper>
//           <div className="back-button">
//             <Link to="/" className="tw-header--back_button" >
//               <i className="fas fa-arrow-circle-left" />{'  '} Back
//           </Link>
//           </div>
//           <h2>Login to Twitter</h2>
//           <Input placeholder="Phone, email or username" type="text" /><br />
//           <Input type="password" placeholder="Password" /><br />
//           <ButtonClassic className="success">Login</ButtonClassic>

//           <Checkbox
//             onClick={() => this.props.onChange(!this.props.checked)}
//           >
//             <input type="checkbox" checked={this.props.checked} />
//             {/* <label>{this.props.label}</label> */}
//             Remember me
//         </Checkbox>
//         </Wrapper>
//       </div>
//     )
//   }
// }